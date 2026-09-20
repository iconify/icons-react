import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkr7lxyrc.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkr7lxyrc"/>`,
		"fallback": "jam:brush-f",
	});
}

export default Component;
