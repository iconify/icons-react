import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/n/nybc2db3k.css';
import '../../css/h/hatha3nri.css';
import '../../css/t/tw5ngbukx.css';
import '../../css/h/h5amn9btw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="nybc2db3k"/><path class="hatha3nri"/><path clip-rule="evenodd" class="tw5ngbukx"/><path class="h5amn9btw"/></g>`,
		"fallback": "icon-park:delete-one",
	});
}

export default Component;
