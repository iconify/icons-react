import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gahgzf5qd.css';
import '../../css/e/e55zwmb-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gahgzf5qd"/><path class="e55zwmb-j"/>`,
		"fallback": "energy-icons:bag-check-20",
	});
}

export default Component;
