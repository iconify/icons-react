import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb2wwnbzj.css';
import '../../css/k/kc5z_3btr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb2wwnbzj"/><path class="kc5z_3btr"/>`,
		"fallback": "lineicons:cool",
	});
}

export default Component;
