import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/z0dd1vb_i.css';
import '../../css/x/xbkdkkb6v.css';
import '../../css/m/mm6u_4rcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="z0dd1vb_i"/><path class="xbkdkkb6v"/><path class="mm6u_4rcf"/></g>`,
		"fallback": "icon-park:garlic",
	});
}

export default Component;
