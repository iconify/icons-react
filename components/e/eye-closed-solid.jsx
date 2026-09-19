import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybntw-bao.css';
import '../../css/u/ut2il9b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybntw-bao"/><path class="ut2il9b4r"/>`,
		"fallback": "basil:eye-closed-solid",
	});
}

export default Component;
