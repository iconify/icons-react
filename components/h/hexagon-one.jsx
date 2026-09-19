import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx_4j-mjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx_4j-mjb"/>`,
		"fallback": "icon-park-outline:hexagon-one",
	});
}

export default Component;
