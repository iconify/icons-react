import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ror_0p-9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ror_0p-9q"/>`,
		"fallback": "octicon:file-media-24",
	});
}

export default Component;
