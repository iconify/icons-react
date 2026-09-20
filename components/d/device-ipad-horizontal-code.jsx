import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snxka50zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snxka50zw"/>`,
		"fallback": "tabler:device-ipad-horizontal-code",
	});
}

export default Component;
