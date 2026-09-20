import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f173tacai.css';
import '../../css/o/odujwcczp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f173tacai"/><path class="odujwcczp"/>`,
		"fallback": "stash:flag-duotone",
	});
}

export default Component;
