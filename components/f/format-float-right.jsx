import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz33hqbpq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz33hqbpq"/>`,
		"fallback": "memory:format-float-right",
	});
}

export default Component;
