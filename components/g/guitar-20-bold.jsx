import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq63fdbpf.css';
import '../../css/f/fuoorab6u.css';
import '../../css/b/bmhruu9eq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq63fdbpf"/><path class="fuoorab6u"/><path class="bmhruu9eq"/>`,
		"fallback": "energy-icons:guitar-20-bold",
	});
}

export default Component;
