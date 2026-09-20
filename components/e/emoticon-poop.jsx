import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d50_phb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d50_phb1p"/>`,
		"fallback": "mdi:emoticon-poop",
	});
}

export default Component;
