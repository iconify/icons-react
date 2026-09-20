import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk7049bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk7049bpx"/>`,
		"fallback": "pixel:collapse-solid",
	});
}

export default Component;
