import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg0v5rbgp.css';
import '../../css/w/wj1xj8bpq.css';
import '../../css/l/lu2e92trj.css';
import '../../css/b/b-sd-zboo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg0v5rbgp"/><path class="wj1xj8bpq"/><path class="lu2e92trj"/><path class="b-sd-zboo"/>`,
		"fallback": "energy-icons:anchor-20-bold",
	});
}

export default Component;
