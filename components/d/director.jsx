import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7ki_z7p.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7ki_z7p"/>`,
		"fallback": "whh:director",
	});
}

export default Component;
