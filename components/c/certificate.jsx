import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk9vvrbyf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk9vvrbyf"/>`,
		"fallback": "glyphs:certificate",
	});
}

export default Component;
