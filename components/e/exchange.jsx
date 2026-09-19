import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq-xpubti.css';

const viewBox = {"width":799,"height":658};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq-xpubti"/>`,
		"fallback": "ls:exchange",
	});
}

export default Component;
