import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p48dyi2lt.css';
import '../../css/e/emos5l7br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p48dyi2lt"/><path class="emos5l7br"/>`,
		"fallback": "boxicons:check-square",
	});
}

export default Component;
