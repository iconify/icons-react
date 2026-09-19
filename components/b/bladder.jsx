import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftsnkcw5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ftsnkcw5d"/>`,
		"fallback": "healthicons:bladder",
	});
}

export default Component;
