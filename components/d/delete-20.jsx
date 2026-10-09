import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2pyevbzu.css';
import '../../css/n/n4-5ir_js.css';
import '../../css/m/maa-xwdby.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2pyevbzu"/><path class="n4-5ir_js"/><path class="maa-xwdby"/>`,
		"fallback": "energy-icons:delete-20",
	});
}

export default Component;
