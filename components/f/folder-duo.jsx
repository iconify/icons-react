import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnc6ln0cv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnc6ln0cv"/>`,
		"fallback": "glyphs:folder-duo",
	});
}

export default Component;
