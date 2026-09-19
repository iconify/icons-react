import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jwyze2jpy.css';
import '../../css/k/khy63_bdh.css';
import '../../css/f/fp3_6rebf.css';
import '../../css/s/scj-7jb2d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="jwyze2jpy"/><path class="khy63_bdh"/><rect class="fp3_6rebf"/><path class="scj-7jb2d"/></g>`,
		"fallback": "charm:binary",
	});
}

export default Component;
