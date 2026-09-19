import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfh-ukf2y.css';
import '../../css/q/qo-gibb2p.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 wfh-ukf2y"/><path class="clr-i-solid clr-i-solid-path-2 qo-gibb2p"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:import-solid",
	});
}

export default Component;
