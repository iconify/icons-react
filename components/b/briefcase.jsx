import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgg9nrbuq.css';
import '../../css/z/zedf9pzpz.css';
import '../../css/p/pj_ax6bww.css';
import '../../css/k/kcm6f8bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgg9nrbuq"/><path class="zedf9pzpz"/><path class="pj_ax6bww"/><path class="kcm6f8bof"/>`,
		"fallback": "uim:briefcase",
	});
}

export default Component;
