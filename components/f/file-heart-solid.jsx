import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il2lrlp5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il2lrlp5z"/>`,
		"fallback": "iconaut:file-heart-solid",
	});
}

export default Component;
