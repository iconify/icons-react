import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmle-2ous.css';
import '../../css/y/yi354_nqc.css';
import '../../css/v/v7fhe39su.css';
import '../../css/y/yct5lw59k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmle-2ous"/><path class="yi354_nqc"/><path class="v7fhe39su"/><path class="yct5lw59k"/>`,
		"fallback": "energy-icons:growth-20",
	});
}

export default Component;
