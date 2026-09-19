import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlodkcqyz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlodkcqyz"/>`,
		"fallback": "glyphs:dollar-sign",
	});
}

export default Component;
