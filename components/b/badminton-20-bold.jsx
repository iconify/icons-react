import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp8tavb-f.css';
import '../../css/v/vuh460n8o.css';
import '../../css/f/f78t3-62r.css';
import '../../css/r/r4kug05-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp8tavb-f"/><path class="vuh460n8o"/><path class="f78t3-62r"/><path class="r4kug05-v"/>`,
		"fallback": "energy-icons:badminton-20-bold",
	});
}

export default Component;
