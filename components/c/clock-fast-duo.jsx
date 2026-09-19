import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njo-2mzrh.css';
import '../../css/s/saiuxqbjq.css';
import '../../css/t/t8e0g0b1d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="njo-2mzrh"/><path class="saiuxqbjq"/><path class="t8e0g0b1d"/></g>`,
		"fallback": "glyphs:clock-fast-duo",
	});
}

export default Component;
