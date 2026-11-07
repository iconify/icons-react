import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzw6lvbdu.css';
import '../../css/s/s1ws97bqa.css';
import '../../css/j/jtnd67jrf.css';
import '../../css/t/tn0g6-4-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzw6lvbdu"/><path class="s1ws97bqa"/><path clip-rule="evenodd" class="jtnd67jrf"/><path clip-rule="evenodd" class="tn0g6-4-n"/>`,
		"fallback": "solar:airbuds-left-bold",
	});
}

export default Component;
