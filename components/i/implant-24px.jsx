import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so_se7bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so_se7bjf"/>`,
		"fallback": "healthicons:implant-24px",
	});
}

export default Component;
