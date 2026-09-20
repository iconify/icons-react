import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zic6etbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zic6etbwr"/>`,
		"fallback": "mdi:battery-90-bluetooth",
	});
}

export default Component;
