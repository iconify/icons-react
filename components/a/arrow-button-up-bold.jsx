import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snne3jg4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snne3jg4n"/>`,
		"fallback": "streamline-ultimate:arrow-button-up-bold",
	});
}

export default Component;
