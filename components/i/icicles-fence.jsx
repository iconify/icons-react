import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyv3t0bmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyv3t0bmy"/>`,
		"fallback": "game-icons:icicles-fence",
	});
}

export default Component;
