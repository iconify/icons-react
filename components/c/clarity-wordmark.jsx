import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1-w-prqa.css';
import '../../css/g/g7er_z6_h.css';
import '../../css/y/ysdvwkbgj.css';
import '../../css/d/drpzlxxvu.css';
import '../../css/f/flsifcbrr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1-w-prqa"/><path class="g7er_z6_h"/><path class="ysdvwkbgj"/><path class="drpzlxxvu"/><path class="flsifcbrr"/>`,
		"fallback": "devicon:clarity-wordmark",
	});
}

export default Component;
