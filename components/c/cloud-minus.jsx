import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpbl5f9pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpbl5f9pc"/>`,
		"fallback": "tabler:cloud-minus",
	});
}

export default Component;
