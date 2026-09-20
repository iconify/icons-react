import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcpc8aclj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcpc8aclj"/>`,
		"fallback": "selfhst:8mb-local-light",
	});
}

export default Component;
