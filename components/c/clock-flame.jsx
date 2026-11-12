import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zcz_3jb9j.css';
import '../../css/l/l-3u4hbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zcz_3jb9j"/><path class="l-3u4hbnv"/></g>`,
		"fallback": "tabler:clock-flame",
	});
}

export default Component;
