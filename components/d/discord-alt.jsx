import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8tn4t_cf.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8tn4t_cf"/>`,
		"fallback": "lineicons:discord-alt",
	});
}

export default Component;
