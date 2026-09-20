import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u3wqukbdf.css';
import '../../css/x/xvhvmkb4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u3wqukbdf"/><path class="xvhvmkb4u"/></g>`,
		"fallback": "streamline-plump:fit-to-width-square",
	});
}

export default Component;
