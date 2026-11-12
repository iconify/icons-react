import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds05xy4_w.css';
import '../../css/f/fwkrdacaj.css';
import '../../css/q/qo_hhtb9e.css';
import '../../css/x/xqd5dlbow.css';
import '../../css/a/a5bc86osr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds05xy4_w"/><path class="fwkrdacaj"/><path class="qo_hhtb9e"/><path class="xqd5dlbow"/><path class="a5bc86osr"/>`,
		"fallback": "selfhst:automatic1111-light",
	});
}

export default Component;
