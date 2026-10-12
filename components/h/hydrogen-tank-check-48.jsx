import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifzu40bfd.css';
import '../../css/i/iyti-7bea.css';
import '../../css/h/hjhs5_6_n.css';
import '../../css/i/iqzpqgb0i.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifzu40bfd"/><path class="iyti-7bea"/><path class="hjhs5_6_n"/><path class="iqzpqgb0i"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:hydrogen-tank-check-48",
	});
}

export default Component;
