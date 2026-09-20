import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd75nn-_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd75nn-_w"/>`,
		"fallback": "stash:eye-closed-solid",
	});
}

export default Component;
