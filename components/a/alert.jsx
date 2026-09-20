import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gav6n2baw.css';
import '../../css/b/bl21z0b4f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gav6n2baw"/><path class="bl21z0b4f"/>`,
		"fallback": "iwwa:alert",
	});
}

export default Component;
