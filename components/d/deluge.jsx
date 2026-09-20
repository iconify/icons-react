import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5m15vbeq.css';
import '../../css/z/z16bp5rql.css';
import '../../css/s/smgw8kb-o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5m15vbeq"/><path class="z16bp5rql"/><path class="smgw8kb-o"/>`,
		"fallback": "selfhst:deluge",
	});
}

export default Component;
