import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg5b9ebia.css';
import '../../css/h/hrfcglb8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg5b9ebia"/><path class="hrfcglb8n"/>`,
		"fallback": "energy-icons:bell-snooze-48-bold",
	});
}

export default Component;
