import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9nj1-bpg.css';
import '../../css/z/znrlbq9xw.css';
import '../../css/p/padkusb7b.css';
import '../../css/t/tlr6z7bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9nj1-bpg"/><path class="znrlbq9xw"/><path class="padkusb7b"/><path class="tlr6z7bhb"/>`,
		"fallback": "lineicons:chrome",
	});
}

export default Component;
