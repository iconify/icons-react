import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzx8rqbxg.css';
import '../../css/q/quscitu3w.css';
import '../../css/i/iv7xugjxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzx8rqbxg"/><path class="quscitu3w"/><path class="iv7xugjxy"/>`,
		"fallback": "selfhst:heyform",
	});
}

export default Component;
