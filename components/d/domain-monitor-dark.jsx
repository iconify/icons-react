import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqyxmsbpe.css';
import '../../css/l/lxfy0olss.css';
import '../../css/d/d2oowm1mw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqyxmsbpe"/><path class="lxfy0olss"/><path class="d2oowm1mw"/>`,
		"fallback": "selfhst:domain-monitor-dark",
	});
}

export default Component;
