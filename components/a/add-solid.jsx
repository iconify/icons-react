import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1nopypbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1nopypbe"/>`,
		"fallback": "basil:add-solid",
	});
}

export default Component;
