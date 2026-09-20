import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzfhmjioe.css';
import '../../css/a/amhl2i3ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzfhmjioe"/><path class="amhl2i3ew"/>`,
		"fallback": "streamline-ultimate:day-sunrise-1-bold",
	});
}

export default Component;
