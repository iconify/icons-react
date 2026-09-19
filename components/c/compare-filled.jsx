import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anuis4b4o.css';
import '../../css/l/lx9wmlfpv.css';
import '../../css/h/h-rpm9riz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="anuis4b4o b"/><rect class="b lx9wmlfpv"/><path class="b h-rpm9riz"/>`,
		"fallback": "boxicons:compare-filled",
	});
}

export default Component;
