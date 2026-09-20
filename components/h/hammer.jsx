import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpa12j_nt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpa12j_nt"/>`,
		"fallback": "pinhead:hammer",
	});
}

export default Component;
