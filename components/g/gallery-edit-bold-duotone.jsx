import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwa9eupgf.css';
import '../../css/x/x446f-znb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwa9eupgf"/><path clip-rule="evenodd" class="x446f-znb"/>`,
		"fallback": "solar:gallery-edit-bold-duotone",
	});
}

export default Component;
