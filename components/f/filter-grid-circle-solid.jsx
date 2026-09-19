import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5rcylbor.css';
import '../../css/o/oxmfj5ier.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 l5rcylbor"/><path class="clr-i-solid clr-i-solid-path-2 oxmfj5ier"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:filter-grid-circle-solid",
	});
}

export default Component;
