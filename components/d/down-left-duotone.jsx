import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iikt1teqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iikt1teqf"/>`,
		"fallback": "si:down-left-duotone",
	});
}

export default Component;
