import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a84g-42ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a84g-42ep"/>`,
		"fallback": "mdi:fuel-pump",
	});
}

export default Component;
