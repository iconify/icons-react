import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/w/wxec1lb6q.css';
import '../../css/t/tj-zl7bbs.css';
import '../../css/l/lo7kaubdk.css';
import '../../css/c/ci1vcybla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="bwpzy-b4l"/><path class="wxec1lb6q"/><path class="tj-zl7bbs"/><path class="lo7kaubdk"/><path class="ci1vcybla"/></g>`,
		"fallback": "icon-park:id-card-v",
	});
}

export default Component;
