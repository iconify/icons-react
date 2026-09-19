import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gigp-2bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gigp-2bdj"/>`,
		"fallback": "grommet-icons:document-verified",
	});
}

export default Component;
