import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pun70et_r.css';
import '../../css/o/orkmcpbch.css';
import '../../css/f/f7hcbobrp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pun70et_r"/><path class="orkmcpbch"/><path class="f7hcbobrp"/></g>`,
		"fallback": "si-glyph:bag-plus",
	});
}

export default Component;
