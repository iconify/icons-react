import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gbgah5nkk.css';
import '../../css/e/etl2nxbmn.css';
import '../../css/x/xfx71mbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gbgah5nkk"/><path class="etl2nxbmn"/><path class="xfx71mbml"/></g>`,
		"fallback": "keyline-icons:battery-sparkles-two-tone",
	});
}

export default Component;
