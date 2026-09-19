import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpoubbo_e.css';
import '../../css/k/k70t2o__t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpoubbo_e"/><path class="k70t2o__t"/>`,
		"fallback": "boxicons:dice-1",
	});
}

export default Component;
