import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9lfx_ls.css';
import '../../css/s/s7ih9zbtp.css';
import '../../css/t/trzsg0bwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in9lfx_ls"/><path class="s7ih9zbtp"/><path class="trzsg0bwg"/>`,
		"fallback": "selfhst:bazarr",
	});
}

export default Component;
