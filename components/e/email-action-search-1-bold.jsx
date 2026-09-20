import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbx4p_6nb.css';
import '../../css/l/l4ej3fvuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbx4p_6nb"/><path class="l4ej3fvuc"/>`,
		"fallback": "streamline-ultimate:email-action-search-1-bold",
	});
}

export default Component;
