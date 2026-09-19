import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v56497vdz.css';
import '../../css/p/pyfdgjupn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v56497vdz"/><path class="pyfdgjupn"/>`,
		"fallback": "flat-color-icons:down-right",
	});
}

export default Component;
