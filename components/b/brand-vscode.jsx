import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owi87abms.css';
import '../../css/d/d4wej39qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="owi87abms"/><path class="d4wej39qt"/></g>`,
		"fallback": "tabler:brand-vscode",
	});
}

export default Component;
