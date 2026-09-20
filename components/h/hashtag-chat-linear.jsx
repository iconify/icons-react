import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwcfj9bbi.css';
import '../../css/j/jiks3hb7x.css';
import '../../css/w/wqzg3jbpj.css';
import '../../css/h/h-j2vcb_a.css';
import '../../css/k/krcz9mbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwcfj9bbi"/><path class="jiks3hb7x"/><path class="wqzg3jbpj"/><path class="h-j2vcb_a"/><path class="krcz9mbyu"/></g>`,
		"fallback": "solar:hashtag-chat-linear",
	});
}

export default Component;
