import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg-wwst4a.css';
import '../../css/b/b7vvgfbct.css';
import '../../css/m/m3ntttbnn.css';
import '../../css/m/mdc-_dw8k.css';
import '../../css/t/ty-3yxbsn.css';
import '../../css/g/gr3ri6aie.css';
import '../../css/v/v_by-ubey.css';
import '../../css/p/p6kourbsh.css';
import '../../css/a/abp9uub4k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg-wwst4a"/><path class="b7vvgfbct"/><path class="m3ntttbnn"/><path class="mdc-_dw8k"/><path class="ty-3yxbsn"/><circle class="gr3ri6aie"/><circle class="v_by-ubey"/><path class="p6kourbsh"/><path class="abp9uub4k"/>`,
		"fallback": "openmoji:front-facing-baby-chick",
	});
}

export default Component;
