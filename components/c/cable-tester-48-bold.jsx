import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pifoudbdm.css';
import '../../css/v/vuyyv1qil.css';
import '../../css/v/vr8_6rk9r.css';
import '../../css/l/lggnzh-ca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pifoudbdm"/><path class="vuyyv1qil"/><path class="vr8_6rk9r"/><path class="lggnzh-ca"/>`,
		"fallback": "energy-icons:cable-tester-48-bold",
	});
}

export default Component;
