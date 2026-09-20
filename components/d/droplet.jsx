import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kij9krb8y.css';
import '../../css/p/pt5dtcbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kij9krb8y"/><path class="pt5dtcbku"/></g>`,
		"fallback": "mynaui:droplet",
	});
}

export default Component;
