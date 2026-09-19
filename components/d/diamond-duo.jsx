import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_rdqn7gk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_rdqn7gk"/>`,
		"fallback": "glyphs:diamond-duo",
	});
}

export default Component;
