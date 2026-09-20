import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anxjqzbvz.css';
import '../../css/s/si1gihitr.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anxjqzbvz"/><path class="si1gihitr"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:info-circle",
	});
}

export default Component;
