import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hzvhqgbpd.css';
import '../../css/l/l-kpgobce.css';
import '../../css/v/v76i5_byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hzvhqgbpd"/><path class="l-kpgobce"/><path class="v76i5_byj"/></g>`,
		"fallback": "icon-park:fold-up-one",
	});
}

export default Component;
