import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz_l2cbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz_l2cbiw"/>`,
		"fallback": "mdi:briefcase-remove-outline",
	});
}

export default Component;
