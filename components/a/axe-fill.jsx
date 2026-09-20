import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt-9i5kip.css';
import '../../css/l/ldidwdo6o.css';
import '../../css/d/dby2-abgs.css';
import '../../css/q/qx4r4bcyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt-9i5kip"/><path class="ldidwdo6o"/><path class="dby2-abgs"/><path class="qx4r4bcyw"/>`,
		"fallback": "mingcute:axe-fill",
	});
}

export default Component;
