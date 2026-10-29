import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4oqcxbpe.css';
import '../../css/e/egyqx8bap.css';
import '../../css/i/iwfcdhl5u.css';
import '../../css/q/qicp8db8o.css';
import '../../css/v/vqrvagbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4oqcxbpe wm-k"/><path class="egyqx8bap wm-a"/><path class="iwfcdhl5u wm-k"/><path class="qicp8db8o wm-s"/><path class="vqrvagbdq wm-s"/>`,
		"fallback": "withicons-bauhaus:image-plus",
	});
}

export default Component;
