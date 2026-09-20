import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo6jjhb5p.css';
import '../../css/e/eroa1ibmd.css';
import '../../css/e/ebh6vui7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo6jjhb5p"/><path class="eroa1ibmd"/><path class="ebh6vui7r"/>`,
		"fallback": "oui:index-settings",
	});
}

export default Component;
