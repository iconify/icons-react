import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi_hcp08f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mi_hcp08f"/>`,
		"fallback": "majesticons:backward-start-circle",
	});
}

export default Component;
