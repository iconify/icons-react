import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d37zg4ilz.css';
import '../../css/f/fe11hu57u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d37zg4ilz"/><circle class="fe11hu57u"/>`,
		"fallback": "typcn:info-large",
	});
}

export default Component;
