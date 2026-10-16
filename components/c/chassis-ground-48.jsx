import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqsth4bzo.css';
import '../../css/n/ng_o9qbxw.css';
import '../../css/r/rnqgbobut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqsth4bzo"/><path class="ng_o9qbxw"/><path class="rnqgbobut"/>`,
		"fallback": "energy-icons:chassis-ground-48",
	});
}

export default Component;
