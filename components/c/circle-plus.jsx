import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u20q-_bqv.css';
import '../../css/o/ohfddi_sq.css';
import '../../css/h/hmk826btk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u20q-_bqv"/><path class="ohfddi_sq"/><path class="hmk826btk"/>`,
		"fallback": "ep:circle-plus",
	});
}

export default Component;
