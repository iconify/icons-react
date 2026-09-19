import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjp21nb0y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjp21nb0y"/>`,
		"fallback": "fa6-solid:arrow-down-short-wide",
	});
}

export default Component;
