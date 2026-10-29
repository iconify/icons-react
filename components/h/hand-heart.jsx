import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqjhdlb_v.css';
import '../../css/y/ye75vbcqm.css';
import '../../css/j/jctnliumq.css';
import '../../css/l/liw58u7sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a yqjhdlb_v"/><path class="wm-k ye75vbcqm"/><path class="jctnliumq wm-k"/><path class="liw58u7sh wm-k"/>`,
		"fallback": "withicons-bauhaus:hand-heart",
	});
}

export default Component;
