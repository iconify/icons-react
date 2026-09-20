import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vak_u6bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vak_u6bwi"/>`,
		"fallback": "tabler:brand-soundcloud",
	});
}

export default Component;
