import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr5qjmbht.css';

const viewBox = {"width":529,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr5qjmbht"/>`,
		"fallback": "websymbol:down-dir",
	});
}

export default Component;
