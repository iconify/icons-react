import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/g/gfv8n0rry.css';
import '../../css/c/c0xe9rb-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="gfv8n0rry"/><path class="c0xe9rb-x"/>`,
		"fallback": "energy-icons:budget-20",
	});
}

export default Component;
