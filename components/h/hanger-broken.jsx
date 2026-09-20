import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io9pepb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io9pepb2j"/>`,
		"fallback": "solar:hanger-broken",
	});
}

export default Component;
