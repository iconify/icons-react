import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trlqebcfp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trlqebcfp"/>`,
		"fallback": "dinkie-icons:face-split",
	});
}

export default Component;
