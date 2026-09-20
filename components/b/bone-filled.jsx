import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esm08ypvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esm08ypvs"/>`,
		"fallback": "tabler:bone-filled",
	});
}

export default Component;
