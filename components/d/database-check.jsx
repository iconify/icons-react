import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/d/diusqeb6m.css';
import '../../css/w/w17mhbn1y.css';
import '../../css/i/itn805g9f.css';
import '../../css/s/sqjo8pbcb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efhtg0b9p"/><path class="diusqeb6m"/><path class="w17mhbn1y"/><path class="itn805g9f"/><path class="sqjo8pbcb"/></g>`,
		"fallback": "streamline-color:database-check",
	});
}

export default Component;
