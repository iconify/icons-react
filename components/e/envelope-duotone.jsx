import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2wzvt0ia.css';
import '../../css/x/x5_n2lbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2wzvt0ia"/><path class="x5_n2lbpi"/>`,
		"fallback": "stash:envelope-duotone",
	});
}

export default Component;
