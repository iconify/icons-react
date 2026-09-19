import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9ycebb1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9ycebb1j"/>`,
		"fallback": "cib:dashlane",
	});
}

export default Component;
