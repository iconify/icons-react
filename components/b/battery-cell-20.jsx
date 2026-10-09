import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z79_i2hkx.css';
import '../../css/h/hu2zm7ich.css';
import '../../css/z/zlii3abwq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z79_i2hkx"/><path class="hu2zm7ich"/><path class="zlii3abwq"/>`,
		"fallback": "energy-icons:battery-cell-20",
	});
}

export default Component;
