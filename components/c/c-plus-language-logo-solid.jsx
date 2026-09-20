import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbfuw4bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zbfuw4bwn"/>`,
		"fallback": "streamline-logos:c-plus-language-logo-solid",
	});
}

export default Component;
