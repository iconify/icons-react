import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqbzzaccj.css';
import '../../css/x/xhcfzkbqi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqbzzaccj"/><path class="xhcfzkbqi"/>`,
		"fallback": "carbon:firewall",
	});
}

export default Component;
