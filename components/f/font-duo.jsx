import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zev4ttbsq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zev4ttbsq"/>`,
		"fallback": "glyphs:font-duo",
	});
}

export default Component;
