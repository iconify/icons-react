import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7-5n80rg.css';
import '../../css/l/leb-08bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7-5n80rg"/><path class="leb-08bqy"/>`,
		"fallback": "solar:chevrons-down-up-bold",
	});
}

export default Component;
