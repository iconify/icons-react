import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptk_gpb7p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptk_gpb7p"/>`,
		"fallback": "glyphs:battery-0",
	});
}

export default Component;
