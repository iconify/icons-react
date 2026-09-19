import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crh93bt4l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crh93bt4l"/>`,
		"fallback": "glyphs:fire-1-duo",
	});
}

export default Component;
