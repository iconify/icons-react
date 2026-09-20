import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meu77l_qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="meu77l_qq"/>`,
		"fallback": "streamline-logos:cnn-logo-block",
	});
}

export default Component;
