import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvc0acc5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvc0acc5c"/>`,
		"fallback": "mynaui:dots-waves-solid",
	});
}

export default Component;
