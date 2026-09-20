import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vohjuun2x.css';
import '../../css/z/z6b9e28xj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vohjuun2x"/><path class="z6b9e28xj"/></g>`,
		"fallback": "streamline-plump:class-lesson",
	});
}

export default Component;
