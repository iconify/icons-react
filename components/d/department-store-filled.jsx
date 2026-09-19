import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdk6zdbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdk6zdbfb"/>`,
		"fallback": "boxicons:department-store-filled",
	});
}

export default Component;
