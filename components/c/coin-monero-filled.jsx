import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5s29jsll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5s29jsll"/>`,
		"fallback": "tabler:coin-monero-filled",
	});
}

export default Component;
