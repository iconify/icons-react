import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyzaa1b7x.css';
import '../../css/l/labyc9bkw.css';
import '../../css/k/kmcx5kbxj.css';
import '../../css/g/g6e0-4tfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyzaa1b7x wm-a"/><path class="labyc9bkw wm-k"/><path class="kmcx5kbxj wm-k"/><path class="g6e0-4tfd wm-k"/>`,
		"fallback": "withicons-bauhaus:gallery-horizontal",
	});
}

export default Component;
