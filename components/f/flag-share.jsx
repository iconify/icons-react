import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlmbm6brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlmbm6brs"/>`,
		"fallback": "tabler:flag-share",
	});
}

export default Component;
