import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj9gnobnu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj9gnobnu"/>`,
		"fallback": "streamline-plump:document-certificate-remix",
	});
}

export default Component;
