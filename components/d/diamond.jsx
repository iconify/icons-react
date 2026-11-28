import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecmg8sbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecmg8sbjy"/>`,
		"fallback": "noviair-light:diamond",
	});
}

export default Component;
