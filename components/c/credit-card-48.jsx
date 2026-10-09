import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txant-bxm.css';
import '../../css/m/mc_31q86u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txant-bxm"/><path class="mc_31q86u"/>`,
		"fallback": "energy-icons:credit-card-48",
	});
}

export default Component;
