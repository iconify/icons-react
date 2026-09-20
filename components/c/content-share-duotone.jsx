import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl9nzzbwz.css';
import '../../css/w/w65rdobqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl9nzzbwz"/><path clip-rule="evenodd" class="w65rdobqx"/>`,
		"fallback": "stash:content-share-duotone",
	});
}

export default Component;
