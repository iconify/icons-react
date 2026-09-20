import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbflzsp4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbflzsp4y"/>`,
		"fallback": "tabler:align-box-top-left-filled",
	});
}

export default Component;
