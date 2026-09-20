import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za24fypym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za24fypym"/>`,
		"fallback": "simple-icons:bitrise",
	});
}

export default Component;
