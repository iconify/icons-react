import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc4rujb2o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 fc4rujb2o"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:folder-open-line",
	});
}

export default Component;
