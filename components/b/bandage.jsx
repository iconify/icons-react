import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnf2tkbyn.css';
import '../../css/w/wu0j47nvj.css';
import '../../css/x/x2cdf-bez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnf2tkbyn"/><path class="wu0j47nvj"/><path class="x2cdf-bez"/>`,
		"fallback": "ion:bandage",
	});
}

export default Component;
