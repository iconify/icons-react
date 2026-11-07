import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6bs9-bbu.css';
import '../../css/d/dehw9gqms.css';
import '../../css/e/eep2d1vox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6bs9-bbu"/><path class="dehw9gqms"/><path class="eep2d1vox"/>`,
		"fallback": "solar:document-add-bold",
	});
}

export default Component;
