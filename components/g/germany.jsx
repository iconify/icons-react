import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi1m_fwmt.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/a/a_hbmibzo.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi1m_fwmt"/><path class="y55zcjfsz"/><path class="a_hbmibzo"/>`,
		"fallback": "tabler-flags:germany",
	});
}

export default Component;
