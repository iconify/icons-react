import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cni5d5ngx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cni5d5ngx"/>`,
		"fallback": "simple-icons:appstore",
	});
}

export default Component;
