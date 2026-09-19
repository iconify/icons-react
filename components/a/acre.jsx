import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbg83l2tt.css';

const viewBox = {"width":444,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbg83l2tt"/>`,
		"fallback": "file-icons:acre",
	});
}

export default Component;
