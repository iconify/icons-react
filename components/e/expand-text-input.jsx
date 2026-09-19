import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf-ij7u5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf-ij7u5s"/>`,
		"fallback": "icon-park-outline:expand-text-input",
	});
}

export default Component;
