import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv14xiw-u.css';
import '../../css/z/zol642wmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv14xiw-u"/><path clip-rule="evenodd" class="zol642wmt"/>`,
		"fallback": "solar:double-alt-arrow-right-bold-duotone",
	});
}

export default Component;
