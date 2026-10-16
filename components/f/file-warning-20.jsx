import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kimfu9q5t.css';
import '../../css/d/df3qvvanp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kimfu9q5t"/><path class="df3qvvanp"/>`,
		"fallback": "energy-icons:file-warning-20",
	});
}

export default Component;
