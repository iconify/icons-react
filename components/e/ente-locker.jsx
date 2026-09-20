import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if8mcmoqt.css';
import '../../css/v/vg7y_5p_t.css';
import '../../css/l/ljujyrycr.css';
import '../../css/z/zs0zvublp.css';
import '../../css/k/kru71j6rb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if8mcmoqt"/><path class="vg7y_5p_t"/><path class="ljujyrycr"/><path class="zs0zvublp"/><path class="kru71j6rb"/>`,
		"fallback": "selfhst:ente-locker",
	});
}

export default Component;
