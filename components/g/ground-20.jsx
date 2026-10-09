import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rio2np7vm.css';
import '../../css/e/e2weyn4xz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rio2np7vm"/><path class="e2weyn4xz"/>`,
		"fallback": "energy-icons:ground-20",
	});
}

export default Component;
