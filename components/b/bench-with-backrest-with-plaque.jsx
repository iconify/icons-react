import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2yryiokk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2yryiokk"/>`,
		"fallback": "pinhead:bench-with-backrest-with-plaque",
	});
}

export default Component;
