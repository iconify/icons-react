import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oenbs8bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oenbs8bjr"/>`,
		"fallback": "reicon:cloud-down-filled",
	});
}

export default Component;
