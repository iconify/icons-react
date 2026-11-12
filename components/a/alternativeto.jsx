import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrkewab2c.css';
import '../../css/b/b7h45cb1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vrkewab2c"/><path class="b7h45cb1t"/>`,
		"fallback": "selfhst:alternativeto",
	});
}

export default Component;
