import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs237eb8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs237eb8l"/>`,
		"fallback": "rivet-icons:home-solid",
	});
}

export default Component;
