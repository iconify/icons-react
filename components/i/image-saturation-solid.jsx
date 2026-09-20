import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeo5czbjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oeo5czbjo"/>`,
		"fallback": "streamline-plump:image-saturation-solid",
	});
}

export default Component;
