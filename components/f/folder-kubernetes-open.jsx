import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q90-1_bvc.css';
import '../../css/q/qqn7q5bip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q90-1_bvc"/><path class="qqn7q5bip"/>`,
		"fallback": "material-icon-theme:folder-kubernetes-open",
	});
}

export default Component;
