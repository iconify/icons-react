import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmi3g-t-d.css';
import '../../css/u/um9t76b7s.css';
import '../../css/c/cd_6icd4r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmi3g-t-d"/><path class="um9t76b7s"/><path class="cd_6icd4r"/>`,
		"fallback": "energy-icons:external-link-20",
	});
}

export default Component;
