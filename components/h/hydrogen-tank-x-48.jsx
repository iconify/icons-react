import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifzu40bfd.css';
import '../../css/i/iyti-7bea.css';
import '../../css/h/hjhs5_6_n.css';
import '../../css/i/iqzpqgb0i.css';
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
		"content": `<path class="ifzu40bfd"/><path class="iyti-7bea"/><path class="hjhs5_6_n"/><path class="iqzpqgb0i"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:hydrogen-tank-x-48",
	});
}

export default Component;
