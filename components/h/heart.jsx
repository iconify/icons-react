import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwuz6sbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwuz6sbzy"/>`,
		"fallback": "meteor-icons:heart",
	});
}

export default Component;
