import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czo9m703j.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czo9m703j"/>`,
		"fallback": "fontisto:hourglass-half",
	});
}

export default Component;
