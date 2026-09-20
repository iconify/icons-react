import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/euo2u3bkq.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/h8i-ghbqk.css';
import '../../css/e/enjp2ob5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="euo2u3bkq"/><path class="xl-jlp1rp"/><path class="h8i-ghbqk"/><circle class="enjp2ob5n"/></g>`,
		"fallback": "solar:gallery-wide-line-duotone",
	});
}

export default Component;
