import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ly74rvd1w.css';
import '../../css/o/ois9ejb5c.css';
import '../../css/v/vwdfj7brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ly74rvd1w"/><path class="ois9ejb5c"/><path class="vwdfj7brr"/></g>`,
		"fallback": "tabler:arrows-join-2",
	});
}

export default Component;
