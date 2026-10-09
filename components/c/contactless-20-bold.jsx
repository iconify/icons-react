import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzc_ai_da.css';
import '../../css/l/l0bdr-bzi.css';
import '../../css/m/mkc2s70sv.css';
import '../../css/h/hqzf0_0is.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzc_ai_da"/><path class="l0bdr-bzi"/><path class="mkc2s70sv"/><path class="hqzf0_0is"/>`,
		"fallback": "energy-icons:contactless-20-bold",
	});
}

export default Component;
