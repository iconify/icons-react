import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuvrm472q.css';
import '../../css/n/nzmy_41cx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuvrm472q"/><path class="nzmy_41cx"/>`,
		"fallback": "energy-icons:gas-turbine-20-bold",
	});
}

export default Component;
