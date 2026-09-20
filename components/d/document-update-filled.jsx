import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c83uesblw.css';
import '../../css/e/eyx20b7zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c83uesblw"/><path class="eyx20b7zm"/>`,
		"fallback": "tdesign:document-update-filled",
	});
}

export default Component;
