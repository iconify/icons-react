import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/ha9__e8qz.css';
import '../../css/g/gsycjybkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ha9__e8qz"/><path class="gsycjybkv"/></g>`,
		"fallback": "streamline-cyber:camera-film-roll-2",
	});
}

export default Component;
