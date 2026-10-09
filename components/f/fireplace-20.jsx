import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic7c4od3i.css';
import '../../css/a/aciwzxbfa.css';
import '../../css/q/qya8mr1nr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic7c4od3i"/><path class="aciwzxbfa"/><path class="qya8mr1nr"/>`,
		"fallback": "energy-icons:fireplace-20",
	});
}

export default Component;
