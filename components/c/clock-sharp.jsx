import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz0oc4b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz0oc4b4m"/>`,
		"fallback": "keyline-icons:clock-sharp",
	});
}

export default Component;
