import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n50wq5bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n50wq5bed"/>`,
		"fallback": "cbi:bulb-group-filament-spot",
	});
}

export default Component;
