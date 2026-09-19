import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9xod9_mo.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9xod9_mo"/>`,
		"fallback": "garden:arrange-content-26",
	});
}

export default Component;
