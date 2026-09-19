import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gako1acdl.css';
import '../../css/m/m_ynd7bgu.css';
import '../../css/b/b-xb5zbzp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 gako1acdl"/><path class="clr-i-outline clr-i-outline-path-2 m_ynd7bgu"/><path class="b-xb5zbzp clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:filter-2-line",
	});
}

export default Component;
