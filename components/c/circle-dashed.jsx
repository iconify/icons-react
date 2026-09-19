import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku-wjcb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ku-wjcb_r"/>`,
		"fallback": "griddy-icons:circle-dashed",
	});
}

export default Component;
