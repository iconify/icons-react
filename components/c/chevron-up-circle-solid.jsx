import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkm_1v9vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkm_1v9vq"/>`,
		"fallback": "iconaut:chevron-up-circle-solid",
	});
}

export default Component;
