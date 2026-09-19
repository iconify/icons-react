import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6dze1_pf.css';
import '../../css/v/ved-39bzt.css';
import '../../css/q/qiprivbld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6dze1_pf"/><path class="ved-39bzt"/><path class="qiprivbld"/>`,
		"fallback": "ion:bonfire-outline",
	});
}

export default Component;
