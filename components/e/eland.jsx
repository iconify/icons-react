import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9khlybqh.css';
import '../../css/n/nnwxahb5l.css';
import '../../css/h/h091qbb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9khlybqh"/><path class="nnwxahb5l"/><path class="h091qbb_i"/>`,
		"fallback": "token:eland",
	});
}

export default Component;
