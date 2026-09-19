import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/ge2nuibdx.css';
import '../../css/k/kxea2dtzw.css';
import '../../css/e/etqay_9cb.css';
import '../../css/f/fbarwjfpg.css';
import '../../css/t/tlx99acho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="ge2nuibdx"/><path class="kxea2dtzw"/><path class="etqay_9cb"/><path class="fbarwjfpg"/><path class="tlx99acho"/></g>`,
		"fallback": "icon-park:editor",
	});
}

export default Component;
