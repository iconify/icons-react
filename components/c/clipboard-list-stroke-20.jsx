import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efpda2bqy.css';
import '../../css/m/mme4osblq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efpda2bqy"/><path class="mme4osblq"/>`,
		"fallback": "garden:clipboard-list-stroke-20",
	});
}

export default Component;
