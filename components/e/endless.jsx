import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsy7fpbnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsy7fpbnb"/>`,
		"fallback": "icon-park-outline:endless",
	});
}

export default Component;
