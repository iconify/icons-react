import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suwmr0geo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suwmr0geo"/>`,
		"fallback": "tabler:brand-visual-studio",
	});
}

export default Component;
