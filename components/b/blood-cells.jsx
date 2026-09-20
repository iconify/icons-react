import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyawl_bdx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyawl_bdx"/>`,
		"fallback": "pinhead:blood-cells",
	});
}

export default Component;
