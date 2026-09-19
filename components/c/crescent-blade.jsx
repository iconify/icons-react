import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy3p43tkq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy3p43tkq"/>`,
		"fallback": "game-icons:crescent-blade",
	});
}

export default Component;
