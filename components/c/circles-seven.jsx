import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq4jlwbcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mq4jlwbcm"/>`,
		"fallback": "icon-park-outline:circles-seven",
	});
}

export default Component;
