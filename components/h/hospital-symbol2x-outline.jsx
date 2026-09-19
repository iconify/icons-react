import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp42q063p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sp42q063p"/>`,
		"fallback": "healthicons:hospital-symbol2x-outline",
	});
}

export default Component;
