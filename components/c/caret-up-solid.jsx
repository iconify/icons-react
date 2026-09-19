import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr7d6n9od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xr7d6n9od"/>`,
		"fallback": "basil:caret-up-solid",
	});
}

export default Component;
