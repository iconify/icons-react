import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec6b-jbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec6b-jbjj"/>`,
		"fallback": "keyline-icons:arrow-up-right-dashed-panel-sharp",
	});
}

export default Component;
