import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbcynr_zb.css';
import '../../css/m/mvifll_hv.css';
import '../../css/z/zoq1otb-d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbcynr_zb"/><path class="mvifll_hv"/><path class="zoq1otb-d"/>`,
		"fallback": "energy-icons:hourglass-20",
	});
}

export default Component;
