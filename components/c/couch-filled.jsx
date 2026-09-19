import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b02t79b0o.css';
import '../../css/k/k5cm0iauv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b02t79b0o"/><path class="k5cm0iauv"/>`,
		"fallback": "boxicons:couch-filled",
	});
}

export default Component;
