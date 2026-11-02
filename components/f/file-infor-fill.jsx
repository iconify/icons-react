import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p13sy1bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p13sy1bie"/>`,
		"fallback": "mingcute:file-infor-fill",
	});
}

export default Component;
