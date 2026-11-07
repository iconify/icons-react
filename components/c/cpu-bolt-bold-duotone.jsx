import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ois7oyb4y.css';
import '../../css/a/a_k6rh_6d.css';
import '../../css/x/xbyvhobil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ois7oyb4y"/><path class="a_k6rh_6d"/><path clip-rule="evenodd" class="xbyvhobil"/>`,
		"fallback": "solar:cpu-bolt-bold-duotone",
	});
}

export default Component;
