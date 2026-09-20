import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfi9zl2px.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfi9zl2px"/>`,
		"fallback": "maki:beach",
	});
}

export default Component;
