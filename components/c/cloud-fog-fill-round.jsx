import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd96-8ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgd96-8ux"/>`,
		"fallback": "coolicons:cloud-fog-fill-round",
	});
}

export default Component;
