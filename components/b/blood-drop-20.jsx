import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_vodpr_t.css';
import '../../css/z/z0mp7-b9d.css';
import '../../css/l/l724hebta.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_vodpr_t"/><path class="z0mp7-b9d"/><path class="l724hebta"/>`,
		"fallback": "energy-icons:blood-drop-20",
	});
}

export default Component;
