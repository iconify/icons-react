import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_biz8vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fj_biz8vl"/>`,
		"fallback": "griddy-icons:alert-circle",
	});
}

export default Component;
