import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2i8c-38t.css';
import '../../css/v/viznwcc0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2i8c-38t"/><path class="viznwcc0i"/>`,
		"fallback": "bxs:image-add",
	});
}

export default Component;
