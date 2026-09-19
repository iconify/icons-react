import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsyyj6buq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="rotate(45 40 12)" class="dsyyj6buq"/>`,
		"fallback": "glyphs:diamond-1-duo",
	});
}

export default Component;
