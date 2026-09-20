import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csj82-bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csj82-bhw"/>`,
		"fallback": "stash:divide",
	});
}

export default Component;
