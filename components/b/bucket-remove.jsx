import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvca0tbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvca0tbhp"/>`,
		"fallback": "mdi:bucket-remove",
	});
}

export default Component;
