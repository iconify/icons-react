import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkfnb-b3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkfnb-b3g"/>`,
		"fallback": "glyphs:crown-1",
	});
}

export default Component;
