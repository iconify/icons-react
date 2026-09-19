import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kt-6ifotw.css';
import '../../css/y/y4vjg0k3v.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/i/ib2bsphlp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><ellipse class="kt-6ifotw"/><path class="y4vjg0k3v"/><path class="vf4h32bmh"/><path class="ib2bsphlp"/></g>`,
		"fallback": "icon-park-solid:data-one",
	});
}

export default Component;
