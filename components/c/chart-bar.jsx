import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqfo8ifwt.css';
import '../../css/k/kc03hjs4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqfo8ifwt"/><path class="kc03hjs4s"/>`,
		"fallback": "prime:chart-bar",
	});
}

export default Component;
