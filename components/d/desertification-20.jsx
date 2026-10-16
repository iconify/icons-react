import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf4d2jblq.css';
import '../../css/t/tmmpscb4j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf4d2jblq"/><path class="tmmpscb4j"/>`,
		"fallback": "energy-icons:desertification-20",
	});
}

export default Component;
