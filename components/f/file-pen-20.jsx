import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs6rvfdlb.css';
import '../../css/e/ea83p6byy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs6rvfdlb"/><path class="ea83p6byy"/>`,
		"fallback": "energy-icons:file-pen-20",
	});
}

export default Component;
