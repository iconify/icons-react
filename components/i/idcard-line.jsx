import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ronm36v_x.css';
import '../../css/e/ek9jxch4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ronm36v_x"/><path class="ek9jxch4q"/>`,
		"fallback": "mingcute:idcard-line",
	});
}

export default Component;
