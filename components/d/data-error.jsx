import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx4upobit.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nvorv_bgg.css';
import '../../css/z/zs_opyb-n.css';
import '../../css/w/wquiciikb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xx4upobit"/><circle class="b6ueueufz"/><circle class="nvorv_bgg"/><path class="zs_opyb-n"/><path class="wquiciikb"/>`,
		"fallback": "carbon:data-error",
	});
}

export default Component;
