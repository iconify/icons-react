import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zadhsv03k.css';
import '../../css/h/hayu7tb_a.css';
import '../../css/k/kfc-s6m9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zadhsv03k"/><rect class="hayu7tb_a"/><path class="kfc-s6m9r"/></g>`,
		"fallback": "reicon:box-archive",
	});
}

export default Component;
