import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isrxbs8fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isrxbs8fa"/>`,
		"fallback": "thesvg:harbor",
	});
}

export default Component;
