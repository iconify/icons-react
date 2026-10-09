import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-4rqjbfm.css';
import '../../css/a/aw6b_uyup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-4rqjbfm"/><path class="aw6b_uyup"/>`,
		"fallback": "energy-icons:capacity-48-bold",
	});
}

export default Component;
