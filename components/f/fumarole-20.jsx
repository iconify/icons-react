import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epseqobcn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epseqobcn"/>`,
		"fallback": "energy-icons:fumarole-20",
	});
}

export default Component;
