import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tax30dbya.css';
import '../../css/n/nrh4mfbus.css';
import '../../css/j/j7cw-sb7g.css';
import '../../css/g/gxlvpg50i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tax30dbya"/><path class="nrh4mfbus"/><path class="j7cw-sb7g"/><path class="gxlvpg50i"/>`,
		"fallback": "solar:bill-bold-duotone",
	});
}

export default Component;
