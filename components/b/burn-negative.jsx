import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl95smbeo.css';
import '../../css/v/vlubr1ntv.css';
import '../../css/n/n4ze-o6yh.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBurnNegative0)"><path class="bl95smbeo"/><path class="vlubr1ntv"/><path clip-rule="evenodd" class="n4ze-o6yh"/></g><defs><clipPath id="healthiconsBurnNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:burn-negative",
	});
}

export default Component;
