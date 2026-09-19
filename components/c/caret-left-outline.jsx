import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_ivf9oak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_ivf9oak"/>`,
		"fallback": "cuida:caret-left-outline",
	});
}

export default Component;
