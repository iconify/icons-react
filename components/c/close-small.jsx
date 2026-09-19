import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp6o6tbvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp6o6tbvu"/>`,
		"fallback": "icon-park-outline:close-small",
	});
}

export default Component;
