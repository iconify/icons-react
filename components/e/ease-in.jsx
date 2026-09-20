import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agxbx8tpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agxbx8tpn"/>`,
		"fallback": "tabler:ease-in",
	});
}

export default Component;
