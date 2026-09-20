import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss_f9kbac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss_f9kbac"/>`,
		"fallback": "material-icon-theme:bashly",
	});
}

export default Component;
