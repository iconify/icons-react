import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfkf9foil.css';
import '../../css/c/cdyd7r4yc.css';
import '../../css/k/kafksab6o.css';
import '../../css/l/lm05uccqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vfkf9foil"/><path class="cdyd7r4yc"/><path class="kafksab6o"/><path class="lm05uccqy"/></g>`,
		"fallback": "hugeicons:ai-security-03",
	});
}

export default Component;
