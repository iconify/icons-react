import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmvk_ntlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmvk_ntlm"/>`,
		"fallback": "thesvg:craft-cms",
	});
}

export default Component;
