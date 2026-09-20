import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biljftzdn.css';
import '../../css/s/s4-6ofb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biljftzdn"/><path clip-rule="evenodd" class="s4-6ofb6f"/>`,
		"fallback": "stash:burger-light",
	});
}

export default Component;
