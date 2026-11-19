import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbecrtbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbecrtbbh"/>`,
		"fallback": "cbi:bosch-compress-heat-pump",
	});
}

export default Component;
