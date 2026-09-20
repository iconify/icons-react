import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjc9o4b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kjc9o4b-j"/>`,
		"fallback": "stash:folder-arrow-up-solid",
	});
}

export default Component;
