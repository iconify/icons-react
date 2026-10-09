import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqmwze80o.css';
import '../../css/e/e3mo12bkj.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/p/pwmnyqitk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqmwze80o"/><path class="e3mo12bkj"/><path class="t8dqc66mp"/><path class="pwmnyqitk"/>`,
		"fallback": "energy-icons:house-x-48",
	});
}

export default Component;
