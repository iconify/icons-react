import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c61h6ccxp.css';
import '../../css/g/gulam1fal.css';
import '../../css/c/ccqy6rbku.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="c61h6ccxp"/><path class="gulam1fal"/><circle class="ccqy6rbku"/><path class="f86xz6sdl"/>`,
		"fallback": "carbon:cloud-satellite",
	});
}

export default Component;
