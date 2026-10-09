import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6cvwtbsp.css';
import '../../css/e/eh_8zfvcn.css';
import '../../css/r/rmyb_66he.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6cvwtbsp"/><path class="eh_8zfvcn"/><path class="rmyb_66he"/>`,
		"fallback": "energy-icons:geyser-48-bold",
	});
}

export default Component;
