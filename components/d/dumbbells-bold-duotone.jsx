import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8d96qbpq.css';
import '../../css/v/v5jciabna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8d96qbpq"/><path class="v5jciabna"/>`,
		"fallback": "solar:dumbbells-bold-duotone",
	});
}

export default Component;
