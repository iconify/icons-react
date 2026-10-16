import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ara_cab0k.css';
import '../../css/o/o6es3ib2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ara_cab0k"/><path class="o6es3ib2q"/>`,
		"fallback": "energy-icons:image-off-48-bold",
	});
}

export default Component;
