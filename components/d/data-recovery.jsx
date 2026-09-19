import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyp2mwbic.css';
import '../../css/i/iw0zruopo.css';
import '../../css/g/gnkgrpboh.css';
import '../../css/h/h2z5fgbqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyp2mwbic"/><g class="iw0zruopo"><path class="gnkgrpboh"/><path class="h2z5fgbqd"/></g>`,
		"fallback": "flat-color-icons:data-recovery",
	});
}

export default Component;
