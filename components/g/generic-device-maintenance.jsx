import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zia8m971p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zia8m971p"/>`,
		"fallback": "ix:generic-device-maintenance",
	});
}

export default Component;
