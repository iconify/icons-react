import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmhywc98x.css';
import '../../css/h/ho371t52a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmhywc98x"/><path class="ho371t52a"/>`,
		"fallback": "solar:circle-bottom-up-outline",
	});
}

export default Component;
