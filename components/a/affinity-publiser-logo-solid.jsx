import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxg7tg66d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gxg7tg66d"/>`,
		"fallback": "streamline-logos:affinity-publiser-logo-solid",
	});
}

export default Component;
