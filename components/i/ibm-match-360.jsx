import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okiwfbt0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okiwfbt0s"/>`,
		"fallback": "carbon:ibm-match-360",
	});
}

export default Component;
