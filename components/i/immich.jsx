import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw7f53skv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw7f53skv"/>`,
		"fallback": "simple-icons:immich",
	});
}

export default Component;
