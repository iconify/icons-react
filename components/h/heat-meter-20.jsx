import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et_33pbys.css';
import '../../css/n/n2ffv50qs.css';
import '../../css/p/p2kzhab-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et_33pbys"/><path class="n2ffv50qs"/><path class="p2kzhab-j"/>`,
		"fallback": "energy-icons:heat-meter-20",
	});
}

export default Component;
