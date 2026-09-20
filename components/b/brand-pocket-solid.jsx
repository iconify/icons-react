import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb_xjuyut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb_xjuyut"/>`,
		"fallback": "mynaui:brand-pocket-solid",
	});
}

export default Component;
