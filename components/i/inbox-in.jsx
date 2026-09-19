import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5py4ziqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c5py4ziqi"/>`,
		"fallback": "griddy-icons:inbox-in",
	});
}

export default Component;
