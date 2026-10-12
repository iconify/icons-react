import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w79r3bb5w.css';
import '../../css/w/wsruu-p6i.css';
import '../../css/x/xwdhawfba.css';
import '../../css/c/c-ce2-joc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w79r3bb5w"/><path class="wsruu-p6i"/><path class="xwdhawfba"/><path class="c-ce2-joc"/>`,
		"fallback": "energy-icons:bell-plus-20-bold",
	});
}

export default Component;
