import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0_tjbczq.css';
import '../../css/s/sfdpv4-xg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 e0_tjbczq"/><path class="clr-i-solid clr-i-solid-path-2 sfdpv4-xg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:certificate-solid",
	});
}

export default Component;
