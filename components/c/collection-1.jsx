import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwk220rgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwk220rgc"/>`,
		"fallback": "tdesign:collection-1",
	});
}

export default Component;
