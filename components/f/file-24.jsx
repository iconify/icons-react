import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txv6a2b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txv6a2b9m"/>`,
		"fallback": "octicon:file-24",
	});
}

export default Component;
