import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqur7u31c.css';

const viewBox = {"width":304,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqur7u31c"/>`,
		"fallback": "ps:arrow-down",
	});
}

export default Component;
