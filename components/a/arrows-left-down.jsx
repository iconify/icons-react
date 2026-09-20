import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ny6gt7vwd.css';
import '../../css/d/drwj9ibty.css';
import '../../css/y/yd2u-pb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ny6gt7vwd"/><path class="drwj9ibty"/><path class="yd2u-pb4l"/></g>`,
		"fallback": "tabler:arrows-left-down",
	});
}

export default Component;
