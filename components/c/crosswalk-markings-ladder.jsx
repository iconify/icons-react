import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mibv8f8tc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mibv8f8tc"/>`,
		"fallback": "pinhead:crosswalk-markings-ladder",
	});
}

export default Component;
