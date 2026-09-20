import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3spu_4jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3spu_4jn"/>`,
		"fallback": "tabler:http-head-off",
	});
}

export default Component;
