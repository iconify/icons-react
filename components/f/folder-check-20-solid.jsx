import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcleg0b1n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tcleg0b1n"/>`,
		"fallback": "sidekickicons:folder-check-20-solid",
	});
}

export default Component;
