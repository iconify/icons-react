import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23succzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23succzw"/>`,
		"fallback": "tabler:bounce-left",
	});
}

export default Component;
