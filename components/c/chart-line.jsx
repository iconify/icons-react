import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqfo8ifwt.css';
import '../../css/e/ef42dcbgs.css';
import '../../css/a/azuny7xti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqfo8ifwt"/><path class="ef42dcbgs"/><path class="azuny7xti"/>`,
		"fallback": "prime:chart-line",
	});
}

export default Component;
