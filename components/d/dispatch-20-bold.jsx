import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytd4eki6q.css';
import '../../css/v/v8pbjq39n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytd4eki6q"/><path class="v8pbjq39n"/>`,
		"fallback": "energy-icons:dispatch-20-bold",
	});
}

export default Component;
