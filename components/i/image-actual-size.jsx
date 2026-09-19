import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3526p9ma.css';
import '../../css/s/svnldyf7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="c3526p9ma"/><path class="svnldyf7i"/></g>`,
		"fallback": "hugeicons:image-actual-size",
	});
}

export default Component;
