import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx5q3876m.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx5q3876m"/>`,
		"fallback": "octicon:git-merge",
	});
}

export default Component;
