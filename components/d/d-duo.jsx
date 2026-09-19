import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qswxg_blr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qswxg_blr"/>`,
		"fallback": "glyphs:d-duo",
	});
}

export default Component;
