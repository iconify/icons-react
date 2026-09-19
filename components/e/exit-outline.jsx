import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1a5g-bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1a5g-bsw"/>`,
		"fallback": "bitcoin-icons:exit-outline",
	});
}

export default Component;
