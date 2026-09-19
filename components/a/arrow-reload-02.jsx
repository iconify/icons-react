import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whpitybyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whpitybyj"/>`,
		"fallback": "ci:arrow-reload-02",
	});
}

export default Component;
