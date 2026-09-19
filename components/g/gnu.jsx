import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shu7q-blg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shu7q-blg"/>`,
		"fallback": "cib:gnu",
	});
}

export default Component;
