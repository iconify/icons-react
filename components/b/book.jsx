import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hn5acabjk.css';
import '../../css/f/fn3cb88kt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="hn5acabjk"/><path clip-rule="evenodd" class="fn3cb88kt"/></g>`,
		"fallback": "icon-park:book",
	});
}

export default Component;
