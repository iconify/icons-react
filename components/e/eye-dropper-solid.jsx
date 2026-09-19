import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj-b0cbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pj-b0cbvp"/>`,
		"fallback": "heroicons:eye-dropper-solid",
	});
}

export default Component;
