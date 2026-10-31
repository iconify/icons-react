import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkhmj7e-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkhmj7e-t"/>`,
		"fallback": "sidekickicons:archive-box-arrow-up-solid",
	});
}

export default Component;
