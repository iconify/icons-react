import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4sr2psho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4sr2psho"/>`,
		"fallback": "iconaut:file-cog-solid",
	});
}

export default Component;
