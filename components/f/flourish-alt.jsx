import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go2yq50ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go2yq50ts"/>`,
		"fallback": "cbi:flourish-alt",
	});
}

export default Component;
