import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrma3-btr.css';
import '../../css/g/gbu8bnozw.css';
import '../../css/k/kc4n-cwqf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vrma3-btr"/><path class="gbu8bnozw"/><path class="kc4n-cwqf"/></g>`,
		"fallback": "streamline-color:cloud-data-transfer",
	});
}

export default Component;
