import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/jqapdkb6f.css';
import '../../css/t/twww59b2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="jqapdkb6f"/><path class="twww59b2f"/></g>`,
		"fallback": "streamline-plump:airport-security",
	});
}

export default Component;
