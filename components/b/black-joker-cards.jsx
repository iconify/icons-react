import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfy1-wbfu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfy1-wbfu"/>`,
		"fallback": "dinkie-icons:black-joker-cards",
	});
}

export default Component;
