import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_02szb5c.css';
import '../../css/t/tw_m98bcm.css';
import '../../css/f/fgnd1rb_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_02szb5c"/><path class="tw_m98bcm"/><path class="fgnd1rb_j"/>`,
		"fallback": "material-icon-theme:folder-apollo-open",
	});
}

export default Component;
