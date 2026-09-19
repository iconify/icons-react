import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bkvyh8bzx.css';
import '../../css/n/nn_a_ub1w.css';
import '../../css/o/ob03iy0nt.css';
import '../../css/s/suq-x345g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="bkvyh8bzx"/><path class="nn_a_ub1w"/><path class="ob03iy0nt"/><path class="suq-x345g"/></g>`,
		"fallback": "icon-park:desk-lamp-one",
	});
}

export default Component;
