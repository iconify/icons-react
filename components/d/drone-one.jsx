import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zxrl963_d.css';
import '../../css/s/s9x2bcctb.css';
import '../../css/z/zsoo0z6zu.css';
import '../../css/b/b_zoysbpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zxrl963_d"/><path class="s9x2bcctb"/><path class="zsoo0z6zu"/><path class="b_zoysbpp"/></g>`,
		"fallback": "icon-park-solid:drone-one",
	});
}

export default Component;
