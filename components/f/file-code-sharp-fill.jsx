import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um4tz2b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um4tz2b7p"/>`,
		"fallback": "keyline-icons:file-code-sharp-fill",
	});
}

export default Component;
