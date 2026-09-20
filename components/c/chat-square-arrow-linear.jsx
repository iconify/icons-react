import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ldqwihbaa.css';
import '../../css/a/auzyv3bch.css';
import '../../css/n/n_45qf4se.css';
import '../../css/m/md0ft93ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ldqwihbaa"/><path class="auzyv3bch"/><path class="n_45qf4se"/><path class="md0ft93ee"/></g>`,
		"fallback": "solar:chat-square-arrow-linear",
	});
}

export default Component;
