import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvp3xeyyy.css';
import '../../css/m/ml87_nbsm.css';
import '../../css/r/r9sv3-ufk.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvp3xeyyy"/><circle class="ml87_nbsm"/><path class="r9sv3-ufk"/>`,
		"fallback": "flat-ui:egg",
	});
}

export default Component;
