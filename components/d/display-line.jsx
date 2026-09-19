import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en3cgfbkw.css';
import '../../css/x/xs05ygs4c.css';
import '../../css/n/nfdi2lb9a.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 en3cgfbkw"/><path class="clr-i-outline clr-i-outline-path-2 xs05ygs4c"/><path class="clr-i-outline clr-i-outline-path-3 nfdi2lb9a"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:display-line",
	});
}

export default Component;
