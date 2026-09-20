import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-elkab4b.css';
import '../../css/a/a17nx6bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-elkab4b"/><path class="a17nx6bfg"/>`,
		"fallback": "uim:arrow-circle-left",
	});
}

export default Component;
