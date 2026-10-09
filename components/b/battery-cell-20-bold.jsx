import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xffij3b0b.css';
import '../../css/s/ss7z2mb1x.css';
import '../../css/n/nqi7nq_zi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xffij3b0b"/><path class="ss7z2mb1x"/><path class="nqi7nq_zi"/>`,
		"fallback": "energy-icons:battery-cell-20-bold",
	});
}

export default Component;
