import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acx5opb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="acx5opb6r"/>`,
		"fallback": "grommet-icons:dislike-fill",
	});
}

export default Component;
