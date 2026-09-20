import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so43afb2h.css';
import '../../css/u/u399owb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so43afb2h"/><path clip-rule="evenodd" class="u399owb5u"/>`,
		"fallback": "stash:cam-video-duotone",
	});
}

export default Component;
