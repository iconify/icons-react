import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo7urvgho.css';
import '../../css/s/s5nareudl.css';
import '../../css/j/jfk9ubm9c.css';
import '../../css/i/i5oonfbxc.css';
import '../../css/i/i2n_2vb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oo7urvgho"/><circle class="s5nareudl"/><circle class="jfk9ubm9c"/><path clip-rule="evenodd" class="i5oonfbxc"/><path class="i2n_2vb7h"/>`,
		"fallback": "lets-icons:group-fill",
	});
}

export default Component;
