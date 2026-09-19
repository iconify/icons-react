import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7gwjibyv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7gwjibyv"/>`,
		"fallback": "fa6-solid:house-user",
	});
}

export default Component;
