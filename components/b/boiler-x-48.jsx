import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg2ap3bxj.css';
import '../../css/l/l5-kz1soe.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg2ap3bxj"/><path class="l5-kz1soe"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:boiler-x-48",
	});
}

export default Component;
