import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw2os6bdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rw2os6bdz"/>`,
		"fallback": "healthicons:9",
	});
}

export default Component;
