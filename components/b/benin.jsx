import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t84zq8bbo.css';
import '../../css/q/qhzt0zrxn.css';
import '../../css/u/uaukdmb7p.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t84zq8bbo"/><path class="qhzt0zrxn"/><path class="uaukdmb7p"/>`,
		"fallback": "tabler-flags:benin",
	});
}

export default Component;
