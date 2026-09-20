import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6oy1q_yr.css';
import '../../css/u/uai2ftzjf.css';
import '../../css/c/ca5fhmbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6oy1q_yr"/><path class="uai2ftzjf"/><path class="ca5fhmbsq"/>`,
		"fallback": "prime:directions-alt",
	});
}

export default Component;
