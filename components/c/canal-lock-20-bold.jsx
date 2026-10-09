import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv842m9yr.css';
import '../../css/r/rv_tlwbie.css';
import '../../css/s/s9cmspn9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv842m9yr"/><path class="rv_tlwbie"/><path class="s9cmspn9i"/>`,
		"fallback": "energy-icons:canal-lock-20-bold",
	});
}

export default Component;
