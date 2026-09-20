import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlhjom21k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlhjom21k"/>`,
		"fallback": "mynaui:chart-bar-one",
	});
}

export default Component;
