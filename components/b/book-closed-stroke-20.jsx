import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aals9abum.css';
import '../../css/m/mz-fxr5ss.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aals9abum"/><path class="mz-fxr5ss"/>`,
		"fallback": "garden:book-closed-stroke-20",
	});
}

export default Component;
