import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plk7a033w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plk7a033w"/>`,
		"fallback": "octicon:dash-24",
	});
}

export default Component;
