import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to90uy7mq.css';
import '../../css/k/kz_jhsbqq.css';
import '../../css/k/khkw4wb8x.css';
import '../../css/n/n1z-x8b7b.css';
import '../../css/s/syc78v1sk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to90uy7mq"/><path class="kz_jhsbqq"/><path class="khkw4wb8x"/><path class="n1z-x8b7b"/><path class="syc78v1sk"/>`,
		"fallback": "streamline-pixel:content-files-draw-content",
	});
}

export default Component;
