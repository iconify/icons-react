import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzh7glb6r.css';
import '../../css/w/wnppey9ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zzh7glb6r"/><path class="wnppey9ws"/>`,
		"fallback": "bx:bxs-landscape",
	});
}

export default Component;
