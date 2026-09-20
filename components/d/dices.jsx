import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqgqa68im.css';
import '../../css/n/nzakh6zzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="pqgqa68im"/><path class="nzakh6zzq"/></g>`,
		"fallback": "lucide:dices",
	});
}

export default Component;
