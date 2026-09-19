import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djv6i7b0m.css';
import '../../css/x/x7x-ecccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="djv6i7b0m"/><path class="x7x-ecccf"/>`,
		"fallback": "bxs:hotel",
	});
}

export default Component;
