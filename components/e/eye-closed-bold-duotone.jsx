import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxw0gio2t.css';
import '../../css/k/k8vhtfbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dxw0gio2t"/><path class="k8vhtfbem"/>`,
		"fallback": "solar:eye-closed-bold-duotone",
	});
}

export default Component;
