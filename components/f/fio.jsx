import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trwtybczh.css';
import '../../css/s/s39r46bkt.css';
import '../../css/h/hoofw7boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trwtybczh"/><path class="s39r46bkt"/><path class="hoofw7boh"/>`,
		"fallback": "token:fio",
	});
}

export default Component;
