import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kly8rpblu.css';
import '../../css/o/on39wybyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer kly8rpblu"/><path class="duoicon-primary-layer on39wybyy"/>`,
		"fallback": "duo-icons:clipboard",
	});
}

export default Component;
