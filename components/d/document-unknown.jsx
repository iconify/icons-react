import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euy7x3bzx.css';
import '../../css/c/c7zalxt4x.css';
import '../../css/l/la19u4bbi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="euy7x3bzx"/><path class="c7zalxt4x"/><path class="la19u4bbi"/>`,
		"fallback": "carbon:document-unknown",
	});
}

export default Component;
