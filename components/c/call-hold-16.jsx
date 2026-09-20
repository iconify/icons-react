import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-oiem-5f.css';
import '../../css/m/mw_3mdbfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-oiem-5f"/><path class="mw_3mdbfk"/>`,
		"fallback": "qlementine-icons:call-hold-16",
	});
}

export default Component;
