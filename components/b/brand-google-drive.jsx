import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0h-jeb0r.css';
import '../../css/g/govk1yb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o0h-jeb0r"/><path class="govk1yb-y"/></g>`,
		"fallback": "tabler:brand-google-drive",
	});
}

export default Component;
