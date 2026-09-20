import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw96okwiv.css';
import '../../css/t/tsxwhyprz.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/z/ze4pz4niq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uw96okwiv"/><path class="tsxwhyprz"/><path class="sj71gtfbi"/><path class="ze4pz4niq"/></g>`,
		"fallback": "streamline-color:hotel-bed-2",
	});
}

export default Component;
