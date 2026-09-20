import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi8p0o5-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zi8p0o5-i"/>`,
		"fallback": "streamline-sharp:closed-umbrella-solid",
	});
}

export default Component;
