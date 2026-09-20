import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-3cpv8jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t-3cpv8jb"/>`,
		"fallback": "streamline-logos:backbonejs-logo-solid",
	});
}

export default Component;
