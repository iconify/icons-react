import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaslzfbmc.css';
import '../../css/x/x_1t_ybrw.css';
import '../../css/l/lnt4cbcsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaslzfbmc"/><path clip-rule="evenodd" class="x_1t_ybrw"/><path class="lnt4cbcsu"/>`,
		"fallback": "token:dep",
	});
}

export default Component;
