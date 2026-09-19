import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc_d9_f0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc_d9_f0a"/>`,
		"fallback": "icon-park:check",
	});
}

export default Component;
