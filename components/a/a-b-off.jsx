import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-ndezp2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-ndezp2s"/>`,
		"fallback": "tabler:a-b-off",
	});
}

export default Component;
