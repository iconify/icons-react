import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msmn8bbfm.css';
import '../../css/x/xgyzx9bhy.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msmn8bbfm"/><path class="xgyzx9bhy"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:bell-check-48",
	});
}

export default Component;
