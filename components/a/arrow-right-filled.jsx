import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdif1-9fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdif1-9fq"/>`,
		"fallback": "bitcoin-icons:arrow-right-filled",
	});
}

export default Component;
