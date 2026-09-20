import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmytx2b1a.css';
import '../../css/u/us0mlcc8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmytx2b1a"/><path clip-rule="evenodd" class="us0mlcc8v"/>`,
		"fallback": "stash:folder-duotone",
	});
}

export default Component;
