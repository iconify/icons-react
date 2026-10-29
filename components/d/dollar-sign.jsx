import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncf43d60x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncf43d60x"/>`,
		"fallback": "vadivam:dollar-sign",
	});
}

export default Component;
