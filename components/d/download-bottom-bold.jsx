import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okpx9ccms.css';
import '../../css/a/a59ct2b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okpx9ccms"/><path class="a59ct2b9y"/>`,
		"fallback": "streamline-ultimate:download-bottom-bold",
	});
}

export default Component;
