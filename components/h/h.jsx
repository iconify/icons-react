import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzeyg_bda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzeyg_bda"/>`,
		"fallback": "icon-park-outline:h",
	});
}

export default Component;
