import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu14m29tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yu14m29tr"/>`,
		"fallback": "streamline-sharp:google-drive-logo-remix",
	});
}

export default Component;
