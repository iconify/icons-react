import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t63ypnw_i.css';
import '../../css/t/tw5hhubaf.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t63ypnw_i"/><path class="tw5hhubaf"/>`,
		"fallback": "lineicons:car",
	});
}

export default Component;
