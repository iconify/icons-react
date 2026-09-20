import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/altng4btx.css';
import '../../css/v/v7d9vybds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="altng4btx"/><path class="v7d9vybds"/>`,
		"fallback": "streamline-ultimate:common-file-module-1-bold",
	});
}

export default Component;
