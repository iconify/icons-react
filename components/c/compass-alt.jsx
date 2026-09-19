import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzt08gbvp.css';
import '../../css/i/i2pz7cbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzt08gbvp"/><path class="i2pz7cbpt"/>`,
		"fallback": "fontisto:compass-alt",
	});
}

export default Component;
