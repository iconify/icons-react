import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/l/l27vts1-t.css';
import '../../css/t/tas6kiwbk.css';
import '../../css/k/k6-l6acei.css';
import '../../css/g/gynfqmbsn.css';
import '../../css/n/ny7s5bb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="l27vts1-t wm-k"/><path class="tas6kiwbk wm-a"/><rect class="k6-l6acei wm-a"/><rect class="gynfqmbsn wm-a"/><path class="ny7s5bb1s wm-s"/></g>`,
		"fallback": "withicons:avatar-person-headphones-blueprint",
	});
}

export default Component;
