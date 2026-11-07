import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6wcrsuxf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/td2shabyo.css';
import '../../css/y/ymvj8abtr.css';
import '../../css/i/i8124czcp.css';
import '../../css/n/nu47jjbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6wcrsuxf"/><g class="xtpeb-edw"><path class="td2shabyo"/><path class="ymvj8abtr"/><path class="i8124czcp"/><path class="nu47jjbnm"/></g>`,
		"fallback": "solar:conditioner-bold-duotone",
	});
}

export default Component;
