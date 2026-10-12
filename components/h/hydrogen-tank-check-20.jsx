import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm-e-5b3l.css';
import '../../css/n/noq31yu3i.css';
import '../../css/c/c4jqm5b5v.css';
import '../../css/r/rhwrewb6n.css';
import '../../css/q/q9z_cedxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm-e-5b3l"/><path class="noq31yu3i"/><path class="c4jqm5b5v"/><path class="rhwrewb6n"/><path class="q9z_cedxn"/>`,
		"fallback": "energy-icons:hydrogen-tank-check-20",
	});
}

export default Component;
