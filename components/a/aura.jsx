import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yipiq0bie.css';
import '../../css/a/ag0fqubbm.css';
import '../../css/b/b10cdoboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yipiq0bie"/><path class="ag0fqubbm"/><path clip-rule="evenodd" class="b10cdoboc"/>`,
		"fallback": "token:aura",
	});
}

export default Component;
