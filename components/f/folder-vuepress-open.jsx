import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlcn2cboi.css';
import '../../css/x/x01ecnbfj.css';
import '../../css/m/mltmzybmp.css';
import '../../css/c/c51w9-bkm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlcn2cboi"/><path class="x01ecnbfj"/><path class="mltmzybmp"/><path class="c51w9-bkm"/>`,
		"fallback": "material-icon-theme:folder-vuepress-open",
	});
}

export default Component;
