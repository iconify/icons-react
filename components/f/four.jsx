import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll7kddc1x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll7kddc1x"/>`,
		"fallback": "glyphs-poly:four",
	});
}

export default Component;
