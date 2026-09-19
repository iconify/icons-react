import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srdcyza2r.css';
import '../../css/g/g7n3rd2ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srdcyza2r"/><path class="g7n3rd2ag"/>`,
		"fallback": "bxl:discord",
	});
}

export default Component;
