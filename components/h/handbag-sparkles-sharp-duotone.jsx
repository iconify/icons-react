import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ian_mmbvf.css';
import '../../css/n/nzp--8blb.css';
import '../../css/o/omi2j1bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ian_mmbvf"/><path class="nzp--8blb"/><path class="omi2j1bhz"/></g>`,
		"fallback": "keyline-icons:handbag-sparkles-sharp-duotone",
	});
}

export default Component;
