import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srs2-9-hd.css';
import '../../css/x/xp--8h70s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="srs2-9-hd"/><path class="xp--8h70s"/></g>`,
		"fallback": "tabler:fountain-off",
	});
}

export default Component;
