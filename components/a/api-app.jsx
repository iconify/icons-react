import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/s/sh2szbc6h.css';
import '../../css/k/kzochbc7e.css';
import '../../css/z/zhr8h_jpw.css';
import '../../css/g/goslebblv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="sh2szbc6h"/><path class="kzochbc7e"/><path class="zhr8h_jpw"/><path class="goslebblv"/></g>`,
		"fallback": "icon-park:api-app",
	});
}

export default Component;
