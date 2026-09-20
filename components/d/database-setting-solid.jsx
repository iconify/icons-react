import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bul0zbb0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bul0zbb0q"/>`,
		"fallback": "streamline:database-setting-solid",
	});
}

export default Component;
