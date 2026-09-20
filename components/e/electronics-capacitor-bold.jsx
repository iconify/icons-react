import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf5uwnd5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf5uwnd5v"/>`,
		"fallback": "streamline-ultimate:electronics-capacitor-bold",
	});
}

export default Component;
