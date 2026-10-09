import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftltwgbpa.css';
import '../../css/l/lw030accp.css';
import '../../css/n/nye0mhklj.css';
import '../../css/f/ftusl_zbz.css';
import '../../css/b/by2jy7bvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftltwgbpa"/><path class="lw030accp"/><path class="nye0mhklj"/><path class="ftusl_zbz"/><path class="by2jy7bvc"/>`,
		"fallback": "energy-icons:drone-48",
	});
}

export default Component;
