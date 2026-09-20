import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0uc1nb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0uc1nb_v"/>`,
		"fallback": "mdi:drupal",
	});
}

export default Component;
