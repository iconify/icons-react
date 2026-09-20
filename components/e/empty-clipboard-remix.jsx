import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2nvzlb9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2nvzlb9d"/>`,
		"fallback": "streamline-flex:empty-clipboard-remix",
	});
}

export default Component;
