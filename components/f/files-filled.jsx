import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2sae0b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2sae0b2r"/>`,
		"fallback": "tabler:files-filled",
	});
}

export default Component;
