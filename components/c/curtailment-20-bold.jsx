import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc7msjb7m.css';
import '../../css/b/bdgh64buo.css';
import '../../css/g/gxsgqfbzc.css';
import '../../css/q/qnfhe3b6k.css';
import '../../css/t/trfzb5bjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc7msjb7m"/><path class="bdgh64buo"/><path class="gxsgqfbzc"/><path class="qnfhe3b6k"/><path class="trfzb5bjj"/>`,
		"fallback": "energy-icons:curtailment-20-bold",
	});
}

export default Component;
