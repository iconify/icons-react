import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt5mcm8zj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt5mcm8zj"/>`,
		"fallback": "octicon:bell-slash-16",
	});
}

export default Component;
