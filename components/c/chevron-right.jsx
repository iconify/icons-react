import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8w0ypeiq.css';
import '../../css/n/nox4hglku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8w0ypeiq"/><path class="nox4hglku"/>`,
		"fallback": "withicons-bauhaus:chevron-right",
	});
}

export default Component;
