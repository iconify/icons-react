import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km7s_km6t.css';
import '../../css/n/nb04b04xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km7s_km6t"/><path class="nb04b04xe"/>`,
		"fallback": "streamline-ultimate:e-commerce-apparel-bold",
	});
}

export default Component;
