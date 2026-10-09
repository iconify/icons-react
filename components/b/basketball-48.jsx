import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/e/exdfc7bwm.css';
import '../../css/g/g81yme2dd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="exdfc7bwm"/><path class="g81yme2dd"/>`,
		"fallback": "energy-icons:basketball-48",
	});
}

export default Component;
