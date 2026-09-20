import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq9xq1nkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq9xq1nkv"/>`,
		"fallback": "reicon:help-square-filled",
	});
}

export default Component;
