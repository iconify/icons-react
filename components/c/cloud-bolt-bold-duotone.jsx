import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czdsxrb2c.css';
import '../../css/f/fsmk2qbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czdsxrb2c"/><path class="fsmk2qbzk"/>`,
		"fallback": "solar:cloud-bolt-bold-duotone",
	});
}

export default Component;
