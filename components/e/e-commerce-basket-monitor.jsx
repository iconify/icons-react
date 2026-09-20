import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui-320b_k.css';
import '../../css/m/mgacobbqu.css';
import '../../css/u/u9e3mk9nq.css';
import '../../css/j/j6qaewbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui-320b_k"/><path class="mgacobbqu"/><path class="u9e3mk9nq"/><path class="j6qaewbmg"/>`,
		"fallback": "streamline-freehand:e-commerce-basket-monitor",
	});
}

export default Component;
