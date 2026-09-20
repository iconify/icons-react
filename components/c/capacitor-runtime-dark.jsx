import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrw7cvbwr.css';
import '../../css/k/kqpp9twbz.css';
import '../../css/u/up9gopgdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrw7cvbwr"/><path class="kqpp9twbz"/><path class="up9gopgdj"/>`,
		"fallback": "selfhst:capacitor-runtime-dark",
	});
}

export default Component;
