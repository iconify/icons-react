import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id-kspbgm.css';
import '../../css/f/f-y-gabit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id-kspbgm"/><path class="f-y-gabit"/>`,
		"fallback": "withicons-bauhaus:check",
	});
}

export default Component;
