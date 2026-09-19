import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owps0zbbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owps0zbbl"/>`,
		"fallback": "game-icons:beaver",
	});
}

export default Component;
