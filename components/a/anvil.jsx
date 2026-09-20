import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_5201bjf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_5201bjf"/>`,
		"fallback": "memory:anvil",
	});
}

export default Component;
