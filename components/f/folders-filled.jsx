import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k16xm7bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k16xm7bhc"/>`,
		"fallback": "griddy-icons:folders-filled",
	});
}

export default Component;
