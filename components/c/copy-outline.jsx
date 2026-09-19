import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh9q8b7lx.css';
import '../../css/g/gtdmtvp5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh9q8b7lx"/><path class="gtdmtvp5a"/>`,
		"fallback": "eva:copy-outline",
	});
}

export default Component;
