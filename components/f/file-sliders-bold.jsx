import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpfnlu-qi.css';
import '../../css/k/kgek_1bkv.css';
import '../../css/p/pctlhgoqh.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpfnlu-qi"/><path class="kgek_1bkv"/><path clip-rule="evenodd" class="pctlhgoqh"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-sliders-bold",
	});
}

export default Component;
