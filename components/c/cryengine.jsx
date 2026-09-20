import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12i2fc3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12i2fc3o"/>`,
		"fallback": "thesvg:cryengine",
	});
}

export default Component;
