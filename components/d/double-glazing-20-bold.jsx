import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k86affo2a.css';
import '../../css/a/avn053b0m.css';
import '../../css/b/brp4g5bsj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k86affo2a"/><path class="avn053b0m"/><path class="brp4g5bsj"/>`,
		"fallback": "energy-icons:double-glazing-20-bold",
	});
}

export default Component;
