import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmunasb2f.css';
import '../../css/v/vg_16dn1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmunasb2f"/><path clip-rule="evenodd" class="vg_16dn1y"/>`,
		"fallback": "stash:calendar-nine-duotone",
	});
}

export default Component;
