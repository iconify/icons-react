import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1ibgbpxi.css';
import '../../css/z/zvg05gx_g.css';
import '../../css/d/d4-m_ebkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1ibgbpxi"/><path class="zvg05gx_g"/><path class="d4-m_ebkn"/>`,
		"fallback": "uim:hipchat",
	});
}

export default Component;
