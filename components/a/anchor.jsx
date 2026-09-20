import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj97e-e8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mj97e-e8y"/>`,
		"fallback": "lineicons:anchor",
	});
}

export default Component;
