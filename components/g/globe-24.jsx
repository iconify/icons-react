import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb3h_o76w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb3h_o76w"/>`,
		"fallback": "octicon:globe-24",
	});
}

export default Component;
