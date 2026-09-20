import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otu4gninj.css';
import '../../css/a/asplq-fqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otu4gninj"/><path clip-rule="evenodd" class="asplq-fqx"/></g>`,
		"fallback": "streamline-plump-color:disable-heart-flat",
	});
}

export default Component;
