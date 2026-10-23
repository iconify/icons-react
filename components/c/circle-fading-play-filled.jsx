import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkjmfib4i.css';
import '../../css/s/s2r542g-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkjmfib4i"/><path class="s2r542g-g"/>`,
		"fallback": "lucide-extended:circle-fading-play-filled",
	});
}

export default Component;
