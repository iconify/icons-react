import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m874v74cr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m874v74cr"/>`,
		"fallback": "icon-park-outline:bridge-one",
	});
}

export default Component;
