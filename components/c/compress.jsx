import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay6-rac8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay6-rac8n"/>`,
		"fallback": "meteor-icons:compress",
	});
}

export default Component;
