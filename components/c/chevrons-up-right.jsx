import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf5x2bw6c.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf5x2bw6c"/>`,
		"fallback": "jam:chevrons-up-right",
	});
}

export default Component;
