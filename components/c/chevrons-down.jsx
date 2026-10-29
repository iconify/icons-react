import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvcrazevp.css';
import '../../css/q/qxgawhb1k.css';
import '../../css/j/jh7f7fdka.css';
import '../../css/k/kr366n3vw.css';
import '../../css/v/v352nk97z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvcrazevp wm-shadow"/><path class="qxgawhb1k wm-k"/><path class="jh7f7fdka wm-k"/><path class="kr366n3vw wm-a"/><path class="v352nk97z wm-a"/>`,
		"fallback": "withicons-pastel:chevrons-down",
	});
}

export default Component;
