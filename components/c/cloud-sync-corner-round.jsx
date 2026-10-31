import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj2u3m68c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj2u3m68c"/>`,
		"fallback": "coolicons:cloud-sync-corner-round",
	});
}

export default Component;
