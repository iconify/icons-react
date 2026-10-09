import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbi78gooe.css';
import '../../css/l/lnfxn6v1w.css';
import '../../css/w/wu_lx2bhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbi78gooe"/><path class="lnfxn6v1w"/><path class="wu_lx2bhy"/>`,
		"fallback": "energy-icons:hydrogen-refuelling-48-bold",
	});
}

export default Component;
