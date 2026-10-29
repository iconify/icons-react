import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_kz-cwtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_kz-cwtl"/>`,
		"fallback": "withicons:file-chart-solid",
	});
}

export default Component;
