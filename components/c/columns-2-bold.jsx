import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsh9rtrrg.css';
import '../../css/x/xwe-p-b_d.css';
import '../../css/d/dqbj1nbqf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tsh9rtrrg"><rect class="xwe-p-b_d"/><rect class="dqbj1nbqf"/></g>`,
		"fallback": "glyphs:columns-2-bold",
	});
}

export default Component;
