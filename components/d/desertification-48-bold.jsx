import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcuvwqb2g.css';
import '../../css/p/p9m8an89s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcuvwqb2g"/><path class="p9m8an89s"/>`,
		"fallback": "energy-icons:desertification-48-bold",
	});
}

export default Component;
