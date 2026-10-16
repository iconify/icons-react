import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6120wbdh.css';
import '../../css/b/bdrmmtuqu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6120wbdh"/><path class="bdrmmtuqu"/>`,
		"fallback": "energy-icons:door-20-bold",
	});
}

export default Component;
