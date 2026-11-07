import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo1l5rcxq.css';
import '../../css/b/b_j6hhbtr.css';
import '../../css/z/z5zquhbop.css';
import '../../css/o/o6jikm0xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo1l5rcxq"/><path class="b_j6hhbtr"/><path class="z5zquhbop"/><path clip-rule="evenodd" class="o6jikm0xc"/>`,
		"fallback": "solar:facemask-circle-bold",
	});
}

export default Component;
