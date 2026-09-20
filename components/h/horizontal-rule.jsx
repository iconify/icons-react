import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8fzx0j8i.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8fzx0j8i"/>`,
		"fallback": "octicon:horizontal-rule",
	});
}

export default Component;
