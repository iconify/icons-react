import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo_eecq-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo_eecq-l"/>`,
		"fallback": "stash:google-drive-duotone",
	});
}

export default Component;
