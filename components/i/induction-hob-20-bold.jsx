import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-w1mof7v.css';
import '../../css/t/tt8n265dz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-w1mof7v"/><path class="tt8n265dz"/>`,
		"fallback": "energy-icons:induction-hob-20-bold",
	});
}

export default Component;
