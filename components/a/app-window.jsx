import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbk7k8bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbk7k8bjb"/>`,
		"fallback": "vadivam:app-window",
	});
}

export default Component;
