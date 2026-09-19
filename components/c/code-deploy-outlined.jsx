import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohlt3tb5l.css';
import '../../css/n/njpi2rhkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohlt3tb5l"/><path class="njpi2rhkg"/>`,
		"fallback": "eos-icons:code-deploy-outlined",
	});
}

export default Component;
