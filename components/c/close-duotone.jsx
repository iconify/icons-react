import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuaw5pb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuaw5pb6f"/>`,
		"fallback": "si:close-duotone",
	});
}

export default Component;
