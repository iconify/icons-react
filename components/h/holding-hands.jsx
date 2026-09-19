import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/i/i4-6jwz0t.css';
import '../../css/g/g03306d2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="i4-6jwz0t"/><path class="g03306d2n"/></g>`,
		"fallback": "icon-park:holding-hands",
	});
}

export default Component;
