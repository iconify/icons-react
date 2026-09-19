import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmq29o5uc.css';
import '../../css/r/rm4duzb7g.css';
import '../../css/d/d8dc_abtl.css';
import '../../css/c/cm352lvlu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmq29o5uc"/><path class="rm4duzb7g"/><path class="d8dc_abtl"/><path class="cm352lvlu"/>`,
		"fallback": "fxemoji:briefcase",
	});
}

export default Component;
