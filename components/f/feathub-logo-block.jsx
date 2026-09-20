import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndh4a3bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndh4a3bpe"/>`,
		"fallback": "streamline-logos:feathub-logo-block",
	});
}

export default Component;
