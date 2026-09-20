import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k426k8bwo.css';
import '../../css/d/db1ausrdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k426k8bwo"/><path class="db1ausrdr"/></g>`,
		"fallback": "mage:folder-check",
	});
}

export default Component;
