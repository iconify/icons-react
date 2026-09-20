import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pazk0caul.css';
import '../../css/g/gf82be1gy.css';
import '../../css/b/b-xxa7vlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pazk0caul"/><path class="gf82be1gy"/><path class="b-xxa7vlp"/>`,
		"fallback": "streamline-ultimate:data-file-search-bold",
	});
}

export default Component;
