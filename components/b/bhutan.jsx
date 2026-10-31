import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyk1s6ipo.css';
import '../../css/a/alb5d4f2o.css';
import '../../css/m/mar76sscm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyk1s6ipo"/><path class="alb5d4f2o"/><path class="mar76sscm"/>`,
		"fallback": "tabler-flags:bhutan",
	});
}

export default Component;
