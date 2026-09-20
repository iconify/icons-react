import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eooifre0n.css';
import '../../css/a/a5q7k9bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="eooifre0n"/><path class="a5q7k9bof"/></g>`,
		"fallback": "keyline-icons:file-search-fill",
	});
}

export default Component;
