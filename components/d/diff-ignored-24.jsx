import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6_5y5_ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6_5y5_ex"/>`,
		"fallback": "octicon:diff-ignored-24",
	});
}

export default Component;
