import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzw-n1jqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gzw-n1jqw"/>`,
		"fallback": "keyline-icons:file-audio-sharp-fill",
	});
}

export default Component;
