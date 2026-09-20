import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmf4z0u-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmf4z0u-d"/>`,
		"fallback": "keyline-icons:git-return-sharp",
	});
}

export default Component;
