import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gonmgov-i.css';
import '../../css/s/s1ew34b9a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gonmgov-i"/><path class="s1ew34b9a"/>`,
		"fallback": "foundation:camera",
	});
}

export default Component;
