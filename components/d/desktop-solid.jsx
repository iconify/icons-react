import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n100ldbyg.css';
import '../../css/g/gzw5n1b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n100ldbyg"/><path class="gzw5n1b6n"/>`,
		"fallback": "stash:desktop-solid",
	});
}

export default Component;
