import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxr7eibdy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxr7eibdy"/>`,
		"fallback": "glyphs:border-all-duo",
	});
}

export default Component;
