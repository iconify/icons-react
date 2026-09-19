import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmwgzixdw.css';
import '../../css/m/mgw07hszg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 vmwgzixdw"/><path class="clr-i-outline clr-i-outline-path-2 mgw07hszg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:disconnect-line",
	});
}

export default Component;
