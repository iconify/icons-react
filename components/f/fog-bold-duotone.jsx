import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h21hmgjli.css';
import '../../css/j/j2mhdfb5v.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/de5deccyd.css';
import '../../css/t/tqknh7bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h21hmgjli"/><path class="j2mhdfb5v"/><g class="xtpeb-edw"><path class="de5deccyd"/><path class="tqknh7bma"/></g>`,
		"fallback": "solar:fog-bold-duotone",
	});
}

export default Component;
