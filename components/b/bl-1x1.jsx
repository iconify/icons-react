import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/erzf03bmv.css';
import '../../css/i/itq0sfbka.css';
import '../../css/y/yun868b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="erzf03bmv"/><path class="itq0sfbka"/><path class="yun868b6i"/></g>`,
		"fallback": "flag:bl-1x1",
	});
}

export default Component;
