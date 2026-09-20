import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt59svwig.css';
import '../../css/d/d5bwuacpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt59svwig"/><path class="d5bwuacpo"/>`,
		"fallback": "mage:box-3d-check-fill",
	});
}

export default Component;
