import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubo9a1bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ubo9a1bzj"/>`,
		"fallback": "streamline-logos:eclipse-ide-logo-solid",
	});
}

export default Component;
