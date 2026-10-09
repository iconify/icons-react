import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzn-fsb_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzn-fsb_z"/>`,
		"fallback": "energy-icons:caret-right-48",
	});
}

export default Component;
