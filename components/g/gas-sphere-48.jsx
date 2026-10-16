import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7tl1ob_w.css';
import '../../css/g/gdz_w_6os.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7tl1ob_w"/><path class="gdz_w_6os"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:gas-sphere-48",
	});
}

export default Component;
