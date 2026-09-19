import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lpmwpmbjx.css';
import '../../css/g/gofpikhwp.css';
import '../../css/y/ydhv3dbut.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lpmwpmbjx"/><path class="gofpikhwp"/><path class="ydhv3dbut"/></g>`,
		"fallback": "flagpack:ga",
	});
}

export default Component;
