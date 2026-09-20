import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abkecsx_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abkecsx_m"/>`,
		"fallback": "streamline-ultimate:expand-full",
	});
}

export default Component;
