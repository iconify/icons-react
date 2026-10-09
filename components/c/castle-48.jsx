import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwrb__blp.css';
import '../../css/h/hzh_8obcm.css';
import '../../css/w/w77hsxbyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwrb__blp"/><path class="hzh_8obcm"/><path class="w77hsxbyo"/>`,
		"fallback": "energy-icons:castle-48",
	});
}

export default Component;
