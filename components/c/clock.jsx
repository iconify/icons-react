import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru9ga46bg.css';
import '../../css/b/bii6hxbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru9ga46bg"/><path clip-rule="evenodd" class="bii6hxbls"/>`,
		"fallback": "grommet-icons:clock",
	});
}

export default Component;
