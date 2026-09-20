import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egf1rkb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egf1rkb1u"/>`,
		"fallback": "thesvg:google-drive",
	});
}

export default Component;
