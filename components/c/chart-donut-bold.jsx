import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as4yz9_fq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as4yz9_fq"/>`,
		"fallback": "glyphs:chart-donut-bold",
	});
}

export default Component;
