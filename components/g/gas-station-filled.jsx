import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amaa57bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amaa57bkx"/>`,
		"fallback": "tabler:gas-station-filled",
	});
}

export default Component;
