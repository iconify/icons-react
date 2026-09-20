import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5xsd4vno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5xsd4vno"/>`,
		"fallback": "tabler:check-filled",
	});
}

export default Component;
