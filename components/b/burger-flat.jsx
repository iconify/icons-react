import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts3dlmbar.css';
import '../../css/c/c47s9zbnd.css';
import '../../css/t/tgzn-ds1s.css';
import '../../css/b/bwg0uobks.css';
import '../../css/t/td8-2hbic.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ts3dlmbar"/><path clip-rule="evenodd" class="c47s9zbnd"/><path class="tgzn-ds1s"/><path class="bwg0uobks"/><path clip-rule="evenodd" class="td8-2hbic"/></g>`,
		"fallback": "streamline-plump-color:burger-flat",
	});
}

export default Component;
