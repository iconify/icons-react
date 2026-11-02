import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo-4ck05w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qo-4ck05w"/>`,
		"fallback": "sidekickicons:crop-20-solid",
	});
}

export default Component;
