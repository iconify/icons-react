import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia5_8rbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ia5_8rbmc"/>`,
		"fallback": "keyline-icons:file-image-sharp-fill",
	});
}

export default Component;
