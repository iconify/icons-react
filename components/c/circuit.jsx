import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkxahjftn.css';
import '../../css/x/xxi34xgyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkxahjftn"/><path class="xxi34xgyn"/>`,
		"fallback": "flat-color-icons:circuit",
	});
}

export default Component;
