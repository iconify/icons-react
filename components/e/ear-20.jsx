import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycxe1lb0r.css';
import '../../css/e/eohaobbab.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycxe1lb0r"/><path class="eohaobbab"/>`,
		"fallback": "energy-icons:ear-20",
	});
}

export default Component;
