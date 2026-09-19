import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4sfmobcd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r4sfmobcd"/>`,
		"fallback": "glyphs:baby-outline",
	});
}

export default Component;
