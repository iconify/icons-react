import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xei0h0qnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xei0h0qnt"/>`,
		"fallback": "tabler:float-right",
	});
}

export default Component;
