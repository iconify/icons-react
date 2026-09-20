import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nzlchnb8z.css';
import '../../css/a/anp3g9bku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nzlchnb8z"/><path class="anp3g9bku"/></g>`,
		"fallback": "streamline-plump:floppy-disk",
	});
}

export default Component;
