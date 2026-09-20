import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri-d8bcfx.css';
import '../../css/b/b7j_n5anm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri-d8bcfx"/><path class="b7j_n5anm"/>`,
		"fallback": "lineicons:archive",
	});
}

export default Component;
