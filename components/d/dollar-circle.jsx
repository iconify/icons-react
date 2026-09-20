import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uvght3btf.css';
import '../../css/y/yeglzqixq.css';
import '../../css/d/dja5cgbxd.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uvght3btf"/><path class="yeglzqixq"/><path class="dja5cgbxd"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:dollar-circle",
	});
}

export default Component;
