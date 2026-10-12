import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh-_s4tzi.css';
import '../../css/f/fzny0updf.css';
import '../../css/r/rtlhf8blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nh-_s4tzi"/><path class="fzny0updf"/><path class="rtlhf8blj"/>`,
		"fallback": "lucide-extended:dices-filled",
	});
}

export default Component;
