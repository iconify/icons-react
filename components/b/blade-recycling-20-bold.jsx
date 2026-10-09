import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g41iklb0r.css';
import '../../css/t/tbd4cl6-p.css';
import '../../css/x/xak4i3mwu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g41iklb0r"/><path class="tbd4cl6-p"/><path class="xak4i3mwu"/>`,
		"fallback": "energy-icons:blade-recycling-20-bold",
	});
}

export default Component;
