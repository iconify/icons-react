import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt2b-sb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt2b-sb_d"/>`,
		"fallback": "basil:google-drive-solid",
	});
}

export default Component;
