import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgl_jgbvu.css';
import '../../css/k/k_3-ad-xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgl_jgbvu"/><path clip-rule="evenodd" class="k_3-ad-xi"/>`,
		"fallback": "token:cummies",
	});
}

export default Component;
