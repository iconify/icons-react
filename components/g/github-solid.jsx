import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr_ae8lpy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr_ae8lpy"/>`,
		"fallback": "teenyicons:github-solid",
	});
}

export default Component;
