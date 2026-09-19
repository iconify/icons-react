import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo51enbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wo51enbpq"/>`,
		"fallback": "griddy-icons:globe-alt-01-filled",
	});
}

export default Component;
