import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrdqe2b8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrdqe2b8p"/>`,
		"fallback": "energy-icons:caret-down-20-bold",
	});
}

export default Component;
