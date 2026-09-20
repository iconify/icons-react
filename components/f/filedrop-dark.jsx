import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-77kf30t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-77kf30t"/>`,
		"fallback": "selfhst:filedrop-dark",
	});
}

export default Component;
