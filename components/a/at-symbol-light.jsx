import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf22_73oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf22_73oq"/>`,
		"fallback": "stash:at-symbol-light",
	});
}

export default Component;
