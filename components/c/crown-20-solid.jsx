import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqei2rb1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqei2rb1x"/>`,
		"fallback": "sidekickicons:crown-20-solid",
	});
}

export default Component;
