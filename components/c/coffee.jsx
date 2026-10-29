import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqrjnab8m.css';
import '../../css/w/wefi0wbjq.css';
import '../../css/y/yp49cdgax.css';
import '../../css/t/twlahtg0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqrjnab8m wm-a"/><path class="wefi0wbjq wm-k"/><path class="wm-k yp49cdgax"/><path class="twlahtg0b wm-a"/>`,
		"fallback": "withicons-bauhaus:coffee",
	});
}

export default Component;
