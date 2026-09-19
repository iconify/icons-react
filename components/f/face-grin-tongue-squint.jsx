import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmgvypbtk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmgvypbtk"/>`,
		"fallback": "fa6-regular:face-grin-tongue-squint",
	});
}

export default Component;
