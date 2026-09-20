import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w379rftri.css';
import '../../css/g/gish6dtuo.css';
import '../../css/c/cb5k0fb4e.css';
import '../../css/q/qglu0sgat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="w379rftri"/><path class="gish6dtuo"/><rect class="cb5k0fb4e"/><rect class="qglu0sgat"/></g>`,
		"fallback": "proicons:apps-add",
	});
}

export default Component;
