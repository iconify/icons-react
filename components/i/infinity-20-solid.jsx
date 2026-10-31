import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z726f_ufb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z726f_ufb"/>`,
		"fallback": "sidekickicons:infinity-20-solid",
	});
}

export default Component;
