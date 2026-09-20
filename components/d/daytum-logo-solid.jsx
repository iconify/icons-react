import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg3w45bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xg3w45bsj"/>`,
		"fallback": "streamline-logos:daytum-logo-solid",
	});
}

export default Component;
