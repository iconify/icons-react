import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mlkxkybue.css';
import '../../css/y/yg8dyikmq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mlkxkybue"/><path class="yg8dyikmq"/></g>`,
		"fallback": "glyphs:eye-lashes",
	});
}

export default Component;
