import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwfac5bpe.css';
import '../../css/i/imbds7bum.css';
import '../../css/k/kd1gl25tg.css';

const viewBox = {"width":848.3,"height":848.3,"left":352.3,"top":346.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGr5flAcRR" x1="0" x2="1" y1="0" y2="1"><stop offset="0" class="bwfac5bpe"/><stop offset="1" class="imbds7bum"/></linearGradient></defs><path fill="url(#SVGr5flAcRR)" transform="matrix(.1 0 0 -.1 0 1536)" class="kd1gl25tg"/>`,
		"fallback": "thesvg-color:dashy",
	});
}

export default Component;
