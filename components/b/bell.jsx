import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfsug6rjk.css';
import '../../css/j/jej7e325s.css';
import '../../css/f/fpvpjcd5p.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfsug6rjk"/><path class="jej7e325s"/><path class="fpvpjcd5p"/>`,
		"fallback": "ei:bell",
	});
}

export default Component;
