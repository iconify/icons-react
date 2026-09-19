import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cg2gptb6q.css';
import '../../css/y/ymnsh4bsn.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="cg2gptb6q"/><path class="ymnsh4bsn"/><path class="ykzxdyblb"/></g>`,
		"fallback": "hugeicons:file-image",
	});
}

export default Component;
