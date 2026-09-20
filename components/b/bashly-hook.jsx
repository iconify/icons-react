import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if3jwc7or.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if3jwc7or"/>`,
		"fallback": "material-icon-theme:bashly-hook",
	});
}

export default Component;
