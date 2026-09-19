import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2p-abdg.css';

const viewBox = {"width":544,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at2p-abdg"/>`,
		"fallback": "fa-solid:highlighter",
	});
}

export default Component;
