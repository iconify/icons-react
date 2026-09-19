import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg2-40p8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xg2-40p8y"/>`,
		"fallback": "heroicons:arrow-small-up-solid",
	});
}

export default Component;
