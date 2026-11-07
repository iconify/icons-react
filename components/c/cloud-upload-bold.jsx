import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jik0uqbax.css';
import '../../css/r/rshns2aav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jik0uqbax"/><path clip-rule="evenodd" class="rshns2aav"/>`,
		"fallback": "solar:cloud-upload-bold",
	});
}

export default Component;
