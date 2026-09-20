import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biy8w7b2k.css';
import '../../css/g/gq5qxpyae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biy8w7b2k"/><path class="gq5qxpyae"/>`,
		"fallback": "pixel:folder-open-solid",
	});
}

export default Component;
