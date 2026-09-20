import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugb4-ibeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugb4-ibeq"/>`,
		"fallback": "meteor-icons:fish",
	});
}

export default Component;
