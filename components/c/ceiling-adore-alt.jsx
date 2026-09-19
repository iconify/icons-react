import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gse3s6bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gse3s6bul"/>`,
		"fallback": "cbi:ceiling-adore-alt",
	});
}

export default Component;
