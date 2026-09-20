import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9flx59id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9flx59id"/>`,
		"fallback": "streamline-logos:forrst-logo-block",
	});
}

export default Component;
