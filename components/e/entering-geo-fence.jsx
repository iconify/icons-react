import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jalrrvblj.css';
import '../../css/k/kny4s0beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jalrrvblj"/><path class="kny4s0beg"/></g>`,
		"fallback": "hugeicons:entering-geo-fence",
	});
}

export default Component;
