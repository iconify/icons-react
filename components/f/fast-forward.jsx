import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek0m9mbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek0m9mbku"/>`,
		"fallback": "noviair-light:fast-forward",
	});
}

export default Component;
