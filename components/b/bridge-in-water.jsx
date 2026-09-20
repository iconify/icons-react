import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqumhyl1l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqumhyl1l"/>`,
		"fallback": "pinhead:bridge-in-water",
	});
}

export default Component;
