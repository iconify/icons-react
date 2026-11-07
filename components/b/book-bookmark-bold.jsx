import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apdbvacmy.css';
import '../../css/u/u_m41fbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apdbvacmy"/><path class="u_m41fbyl"/>`,
		"fallback": "solar:book-bookmark-bold",
	});
}

export default Component;
