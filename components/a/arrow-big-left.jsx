import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz38x801z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz38x801z"/>`,
		"fallback": "vadivam:arrow-big-left",
	});
}

export default Component;
