import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guc1_jbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="guc1_jbae"/>`,
		"fallback": "griddy-icons:identification-card",
	});
}

export default Component;
