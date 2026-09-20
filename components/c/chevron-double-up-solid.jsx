import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzl74qb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzl74qb4g"/>`,
		"fallback": "mynaui:chevron-double-up-solid",
	});
}

export default Component;
