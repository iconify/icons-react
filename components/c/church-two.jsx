import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/nkc9dzbgd.css';
import '../../css/y/y3ph28bwi.css';
import '../../css/j/jkh8i6b9q.css';
import '../../css/y/yj-zoacuo.css';
import '../../css/h/hvlqumljk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="nkc9dzbgd"/><path class="y3ph28bwi"/><path class="jkh8i6b9q"/><path class="yj-zoacuo"/><path class="hvlqumljk"/></g>`,
		"fallback": "icon-park:church-two",
	});
}

export default Component;
