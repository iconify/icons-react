import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd7n-fdmu.css';
import '../../css/t/tkkwlub3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zd7n-fdmu"/><path class="tkkwlub3g"/>`,
		"fallback": "solar:end-call-rounded-bold-duotone",
	});
}

export default Component;
