import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_uj--bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_uj--bnl"/>`,
		"fallback": "griddy-icons:component-tabs",
	});
}

export default Component;
