import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7jhm504f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="b7jhm504f"/>`,
		"fallback": "garden:circle-fill-12",
	});
}

export default Component;
