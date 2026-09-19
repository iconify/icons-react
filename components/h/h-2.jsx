import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti120ucnm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti120ucnm"/>`,
		"fallback": "glyphs:h-2",
	});
}

export default Component;
