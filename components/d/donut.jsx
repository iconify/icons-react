import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qyzbm2v5d.css';
import '../../css/n/n0qw2rb8w.css';
import '../../css/o/oyrnahbhe.css';
import '../../css/z/zl8syfbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qyzbm2v5d"/><path class="n0qw2rb8w wm-shine"/><path class="oyrnahbhe wm-k"/><path class="wm-a zl8syfbae"/></g>`,
		"fallback": "withicons-kawaii:donut",
	});
}

export default Component;
