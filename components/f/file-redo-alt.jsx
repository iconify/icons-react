import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9k3s_lst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9k3s_lst"/>`,
		"fallback": "uil:file-redo-alt",
	});
}

export default Component;
