import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb_nxg3mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hb_nxg3mr"/>`,
		"fallback": "stash:chevron-up-duotone",
	});
}

export default Component;
