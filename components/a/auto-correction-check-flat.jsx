import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zoa2jjjrp.css';
import '../../css/v/v580zsb7y.css';
import '../../css/z/zjxtmh_up.css';
import '../../css/n/nwn_tvhmh.css';
import '../../css/g/gxh038b0j.css';
import '../../css/i/i-rlj3w_d.css';
import '../../css/b/b7jt5bbup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zoa2jjjrp"/><g class="v580zsb7y"><path class="zjxtmh_up"/><path class="nwn_tvhmh"/><path class="gxh038b0j"/><path class="i-rlj3w_d"/><path class="b7jt5bbup"/></g></g>`,
		"fallback": "streamline-flex-color:auto-correction-check-flat",
	});
}

export default Component;
