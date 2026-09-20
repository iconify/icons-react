import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acmwh1p4z.css';
import '../../css/e/e3v1inbws.css';
import '../../css/b/bbq7rkbew.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acmwh1p4z"/><path class="e3v1inbws"/><path class="bbq7rkbew"/>`,
		"fallback": "medical-icon:imaging-alternative-pet",
	});
}

export default Component;
