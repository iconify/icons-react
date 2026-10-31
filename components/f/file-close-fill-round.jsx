import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maz01fk0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maz01fk0g"/>`,
		"fallback": "coolicons:file-close-fill-round",
	});
}

export default Component;
