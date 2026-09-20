import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lelswbxrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lelswbxrh"/>`,
		"fallback": "keyline-icons:brain-cog-sharp-fill",
	});
}

export default Component;
