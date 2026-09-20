import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2i529cms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2i529cms"/>`,
		"fallback": "tabler:folder-off",
	});
}

export default Component;
