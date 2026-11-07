import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ae217nbka.css';
import '../../css/u/u154v_8wc.css';
import '../../css/v/v5w4uik1f.css';
import '../../css/s/sdqne7jvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ae217nbka"/><path class="u154v_8wc"/><path class="v5w4uik1f"/><path class="sdqne7jvy"/></g>`,
		"fallback": "solar:broom-broken",
	});
}

export default Component;
