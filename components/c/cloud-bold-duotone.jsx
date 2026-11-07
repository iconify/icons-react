import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk87vthwz.css';
import '../../css/v/v7o6jqpbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gk87vthwz"/><path class="v7o6jqpbt"/>`,
		"fallback": "solar:cloud-bold-duotone",
	});
}

export default Component;
