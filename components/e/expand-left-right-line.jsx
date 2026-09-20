import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfe_h5bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfe_h5bhr"/>`,
		"fallback": "ri:expand-left-right-line",
	});
}

export default Component;
