import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhikjhb9d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhikjhb9d"/>`,
		"fallback": "icon-park-outline:expand-left-and-right",
	});
}

export default Component;
