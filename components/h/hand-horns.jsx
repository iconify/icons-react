import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh-gn6b-g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kh-gn6b-g"/>`,
		"fallback": "glyphs-poly:hand-horns",
	});
}

export default Component;
