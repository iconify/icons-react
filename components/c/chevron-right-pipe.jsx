import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlim-7bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlim-7bcz"/>`,
		"fallback": "tabler:chevron-right-pipe",
	});
}

export default Component;
