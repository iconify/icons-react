import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swygx4bfa.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swygx4bfa"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:digital-signature-line",
	});
}

export default Component;
