import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imiobx9sm.css';
import '../../css/k/k4-_ilboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imiobx9sm"/><path clip-rule="evenodd" class="k4-_ilboz"/>`,
		"fallback": "basil:adobe-illustrator-solid",
	});
}

export default Component;
