import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s62kcabep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s62kcabep"/>`,
		"fallback": "keyline-icons:credit-card-2-sharp",
	});
}

export default Component;
