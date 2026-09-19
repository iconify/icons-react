import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxao0zblb.css';
import '../../css/m/mdvlj20nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxao0zblb"/><path clip-rule="evenodd" class="mdvlj20nw"/>`,
		"fallback": "basil:eye-solid",
	});
}

export default Component;
