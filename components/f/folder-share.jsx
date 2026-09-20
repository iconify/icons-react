import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amr6prbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amr6prbcd"/>`,
		"fallback": "tabler:folder-share",
	});
}

export default Component;
