import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md8_qczcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md8_qczcz"/>`,
		"fallback": "coolicons:circle-arrow-up-left-round",
	});
}

export default Component;
