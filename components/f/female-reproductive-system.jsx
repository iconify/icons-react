import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr-jp9bne.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr-jp9bne"/>`,
		"fallback": "pinhead:female-reproductive-system",
	});
}

export default Component;
