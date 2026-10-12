import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjmjq831a.css';
import '../../css/z/z1o2t68zu.css';
import '../../css/t/tok4elbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjmjq831a"/><path class="z1o2t68zu"/><path class="tok4elbfr"/>`,
		"fallback": "energy-icons:cash-register-20",
	});
}

export default Component;
