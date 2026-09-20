import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sisycybjx.css';
import '../../css/o/om9zpebmo.css';
import '../../css/o/ollo3sb5z.css';
import '../../css/c/cs5k_nzsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sisycybjx"/><path class="om9zpebmo"/><path class="ollo3sb5z"/><path class="cs5k_nzsh"/></g>`,
		"fallback": "streamline-ultimate:conversation-sync",
	});
}

export default Component;
