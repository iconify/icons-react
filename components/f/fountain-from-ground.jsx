import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dffe5p_ib.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dffe5p_ib"/>`,
		"fallback": "pinhead:fountain-from-ground",
	});
}

export default Component;
