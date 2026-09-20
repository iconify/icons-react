import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz83kzh_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz83kzh_b"/>`,
		"fallback": "simple-icons:azurepipelines",
	});
}

export default Component;
