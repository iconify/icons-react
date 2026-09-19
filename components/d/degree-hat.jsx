import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zx8rg0y0v.css';
import '../../css/t/t5ak6puto.css';
import '../../css/k/kw15io2hn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="zx8rg0y0v"/><path class="t5ak6puto"/><path class="kw15io2hn"/></g>`,
		"fallback": "icon-park:degree-hat",
	});
}

export default Component;
