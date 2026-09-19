import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq9fuee_f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq9fuee_f"/>`,
		"fallback": "glyphs:canoe-bold",
	});
}

export default Component;
