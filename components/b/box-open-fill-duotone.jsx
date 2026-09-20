import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxq2l9bzi.css';
import '../../css/w/w_jw7cb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxq2l9bzi"/><path clip-rule="evenodd" class="w_jw7cb9m"/>`,
		"fallback": "lets-icons:box-open-fill-duotone",
	});
}

export default Component;
