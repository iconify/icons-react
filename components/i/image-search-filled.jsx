import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aznt7d64g.css';
import '../../css/l/ld_h86szq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aznt7d64g"/><path class="ld_h86szq"/>`,
		"fallback": "tdesign:image-search-filled",
	});
}

export default Component;
