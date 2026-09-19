import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kz9ilmb3v.css';
import '../../css/t/t5qt9rgnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="kz9ilmb3v"/><path class="t5qt9rgnk"/></g>`,
		"fallback": "icon-park:insert-card",
	});
}

export default Component;
