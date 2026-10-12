import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t428kcbwb.css';
import '../../css/j/jc8zivbnv.css';
import '../../css/b/bzt789kkw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t428kcbwb"/><path class="jc8zivbnv"/><path class="bzt789kkw"/>`,
		"fallback": "energy-icons:cash-register-48",
	});
}

export default Component;
