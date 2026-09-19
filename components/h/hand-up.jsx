import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gqzrcgbas.css';
import '../../css/t/t3es0cbgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="gqzrcgbas"/><path clip-rule="evenodd" class="t3es0cbgl"/></g>`,
		"fallback": "icon-park:hand-up",
	});
}

export default Component;
