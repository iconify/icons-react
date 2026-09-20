import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez2ebpnon.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez2ebpnon"/>`,
		"fallback": "teenyicons:info-small-outline",
	});
}

export default Component;
