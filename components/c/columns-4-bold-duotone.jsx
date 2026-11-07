import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2-x-cbeh.css';
import '../../css/j/j-2a-nbrj.css';
import '../../css/o/os9vkpw9m.css';
import '../../css/y/yl0s6gb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2-x-cbeh"/><path class="j-2a-nbrj"/><path class="os9vkpw9m"/><path class="yl0s6gb3b"/>`,
		"fallback": "solar:columns-4-bold-duotone",
	});
}

export default Component;
