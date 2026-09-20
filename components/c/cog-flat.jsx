import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl68r0buz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zl68r0buz"/>`,
		"fallback": "streamline-plump-color:cog-flat",
	});
}

export default Component;
