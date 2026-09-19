import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/njn7qhbar.css';
import '../../css/w/w911bxbqf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="njn7qhbar"/><path class="w911bxbqf"/></g>`,
		"fallback": "glyphs:box-layout",
	});
}

export default Component;
