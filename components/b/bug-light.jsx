import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq8xb2ljf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qq8xb2ljf"/>`,
		"fallback": "stash:bug-light",
	});
}

export default Component;
