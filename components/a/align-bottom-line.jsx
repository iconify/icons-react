import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcl9tj99s.css';
import '../../css/w/wrjrr_5oa.css';
import '../../css/g/g35jkubnu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 vcl9tj99s"/><path class="clr-i-outline clr-i-outline-path-2 wrjrr_5oa"/><path class="clr-i-outline clr-i-outline-path-3 g35jkubnu"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:align-bottom-line",
	});
}

export default Component;
