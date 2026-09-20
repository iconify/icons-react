import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tk4g5-bhb.css';
import '../../css/k/kbtc9ac4m.css';
import '../../css/x/xpdxhmb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="tk4g5-bhb"/><path class="kbtc9ac4m"/><path class="xpdxhmb7h"/></g>`,
		"fallback": "streamline-logos:designmoo-logo",
	});
}

export default Component;
