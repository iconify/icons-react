import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj7xjdbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wj7xjdbqc"/>`,
		"fallback": "sidekickicons:crop-solid",
	});
}

export default Component;
