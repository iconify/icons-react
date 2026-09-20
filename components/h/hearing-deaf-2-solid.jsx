import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzdji6bpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nzdji6bpg"/>`,
		"fallback": "streamline:hearing-deaf-2-solid",
	});
}

export default Component;
