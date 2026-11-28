import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5-8z3bpv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qkob93buz.css';
import '../../css/k/kwu0e7-kt.css';
import '../../css/w/wkiiqlbnc.css';
import '../../css/g/gsn-xsbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5-8z3bpv secondary"/><g class="dt0cm9dhy primary"><path class="qkob93buz"/><path class="kwu0e7-kt"/><path class="wkiiqlbnc"/><path class="gsn-xsbdg"/></g>`,
		"fallback": "iconaut:folder-tree-duo",
	});
}

export default Component;
