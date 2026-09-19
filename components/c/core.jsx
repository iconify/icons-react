import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zolj80blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zolj80blv"/>`,
		"fallback": "boxicons:core",
	});
}

export default Component;
