import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il9r52klx.css';
import '../../css/r/rlm82lo4o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il9r52klx"/><path class="rlm82lo4o"/>`,
		"fallback": "lineicons:arrow-up-circle",
	});
}

export default Component;
