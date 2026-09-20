import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt7tzjx4w.css';
import '../../css/z/z8-isybgj.css';
import '../../css/l/l57r68y7k.css';
import '../../css/c/cjrd52xhg.css';
import '../../css/y/yt14d7bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt7tzjx4w"/><path class="z8-isybgj"/><path class="l57r68y7k"/><path class="cjrd52xhg"/><path class="yt14d7bod"/>`,
		"fallback": "streamline-freehand:camera-settings-wifi",
	});
}

export default Component;
