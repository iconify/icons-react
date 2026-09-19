import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyke8k9iy.css';
import '../../css/n/ng0hn9-bg.css';
import '../../css/b/b9xf7m9kb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyke8k9iy"/><path class="ng0hn9-bg"/><path class="b9xf7m9kb"/>`,
		"fallback": "devicon:bruno-wordmark",
	});
}

export default Component;
