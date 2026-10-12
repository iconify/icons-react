import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak6ducc_n.css';
import '../../css/u/u91kzpbzw.css';
import '../../css/i/ifiay95ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ak6ducc_n"/><path class="u91kzpbzw"/><path class="ifiay95ie"/></g>`,
		"fallback": "lucide-extended:arrow-big-left-dash-duotone",
	});
}

export default Component;
