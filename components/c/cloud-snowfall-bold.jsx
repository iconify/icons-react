import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9eme7ben.css';
import '../../css/b/bruiaybse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9eme7ben"/><path class="bruiaybse"/>`,
		"fallback": "solar:cloud-snowfall-bold",
	});
}

export default Component;
