import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hexp-ab2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hexp-ab2p"/>`,
		"fallback": "heroicons:arrow-left",
	});
}

export default Component;
