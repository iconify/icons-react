import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo68ar.css';
import '../../css/q/qa-o7h.css';
import '../../css/e/ewvm5y.css';
import '../../css/k/kullsj.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo68ar qa-o7h"/><path class="ewvm5y qa-o7h"/><path class="kullsj qa-o7h"/>`,
		"fallback": "line-md:grid-3",
	});
}

export default Component;
