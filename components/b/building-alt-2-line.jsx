import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukh3251yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukh3251yi"/>`,
		"fallback": "si:building-alt-2-line",
	});
}

export default Component;
