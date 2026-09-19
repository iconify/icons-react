import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upcj_ab3a.css';
import '../../css/u/ui4msccxe.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 upcj_ab3a"/><path class="clr-i-outline clr-i-outline-path-2 ui4msccxe"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:file-share-line",
	});
}

export default Component;
