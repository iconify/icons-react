import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v9mldkbxw.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/b/b997g1uyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="v9mldkbxw"/><path class="mp3b3lb8i"/><path class="b997g1uyo"/></g>`,
		"fallback": "icon-park-outline:code-laptop",
	});
}

export default Component;
