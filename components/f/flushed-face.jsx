import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0_vk6n_d.css';
import '../../css/f/fmnqfq9fv.css';
import '../../css/v/vf5hq2kdd.css';
import '../../css/n/nw6x3capc.css';
import '../../css/y/y_tv6wr_t.css';
import '../../css/h/huuajhmrh.css';
import '../../css/y/yl6wnpbbi.css';
import '../../css/l/loce1kbzv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0_vk6n_d"/><path class="fmnqfq9fv"/><path class="vf5hq2kdd"/><path class="nw6x3capc"/><path class="y_tv6wr_t"/><circle class="huuajhmrh"/><path class="yl6wnpbbi"/><path class="loce1kbzv"/>`,
		"fallback": "openmoji:flushed-face",
	});
}

export default Component;
