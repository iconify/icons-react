import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-r7jbye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk-r7jbye"/>`,
		"fallback": "icomoon-free:cogs",
	});
}

export default Component;
