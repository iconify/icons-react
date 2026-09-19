import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvzedtd8y.css';
import '../../css/i/i3yjklbnq.css';
import '../../css/w/wzup-8xfj.css';
import '../../css/j/jfemo-btz.css';
import '../../css/q/q434f9b1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kvzedtd8y"/><circle class="i3yjklbnq"/><path class="wzup-8xfj"/><path class="jfemo-btz"/><path class="q434f9b1d"/></g>`,
		"fallback": "catppuccin:folder-turbo",
	});
}

export default Component;
