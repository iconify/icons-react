import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmmio3p-i.css';
import '../../css/w/w7niv3b6v.css';
import '../../css/c/c76r55w5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmmio3p-i"/><path class="w7niv3b6v"/><path class="c76r55w5f"/>`,
		"fallback": "stash:bug-duotone",
	});
}

export default Component;
