import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs5gx7_kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs5gx7_kw"/>`,
		"fallback": "tabler:device-floppy-filled",
	});
}

export default Component;
