import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t98k1grdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t98k1grdv"/>`,
		"fallback": "sidekickicons:cloud-x-mark-solid",
	});
}

export default Component;
