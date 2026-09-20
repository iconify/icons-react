import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk10_ekef.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk10_ekef"/>`,
		"fallback": "memory:arrow-down-box",
	});
}

export default Component;
