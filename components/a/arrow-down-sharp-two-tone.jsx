import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg-d9bb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg-d9bb-n"/>`,
		"fallback": "keyline-icons:arrow-down-sharp-two-tone",
	});
}

export default Component;
