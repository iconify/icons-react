import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hko1tx88j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hko1tx88j"/>`,
		"fallback": "pinhead:barbell",
	});
}

export default Component;
