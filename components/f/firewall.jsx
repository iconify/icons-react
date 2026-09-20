import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlg4kvbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlg4kvbes"/>`,
		"fallback": "mdi:firewall",
	});
}

export default Component;
