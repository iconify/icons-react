import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrjr_r.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrjr_r"/>`,
		"fallback": "line-md:chevron-small-left",
	});
}

export default Component;
