import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5ogxjm1y.css';
import '../../css/b/b5ybc4bew.css';
import '../../css/p/p8bolj64l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5ogxjm1y"/><path class="b5ybc4bew"/><path class="p8bolj64l"/>`,
		"fallback": "solar:grid-2x2-add-bold-duotone",
	});
}

export default Component;
