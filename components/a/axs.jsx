import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lef6v5bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lef6v5bal"/>`,
		"fallback": "token:axs",
	});
}

export default Component;
