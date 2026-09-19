import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/r/rt8_ymbfa.css';
import '../../css/z/zh84q581l.css';
import '../../css/f/fml2hgb5a.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="rt8_ymbfa"/><path class="zh84q581l"/><path class="fml2hgb5a"/></g>`,
		"fallback": "flag:ic-4x3",
	});
}

export default Component;
