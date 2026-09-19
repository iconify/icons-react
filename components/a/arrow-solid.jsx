import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp5e80bdw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp5e80bdw"/>`,
		"fallback": "glyphs:arrow-solid",
	});
}

export default Component;
