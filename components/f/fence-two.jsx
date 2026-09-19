import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8s4zn2iq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8s4zn2iq"/>`,
		"fallback": "icon-park-outline:fence-two",
	});
}

export default Component;
