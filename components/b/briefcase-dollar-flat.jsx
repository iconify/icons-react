import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqiwj7bws.css';
import '../../css/a/ah4dkhbeo.css';
import '../../css/a/aex-kum2g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sqiwj7bws"/><path class="ah4dkhbeo"/><path clip-rule="evenodd" class="aex-kum2g"/></g>`,
		"fallback": "streamline-color:briefcase-dollar-flat",
	});
}

export default Component;
