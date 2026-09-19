import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmeo3k1fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmeo3k1fj"/>`,
		"fallback": "heroicons:cube-transparent-solid",
	});
}

export default Component;
