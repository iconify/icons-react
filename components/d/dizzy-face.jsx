import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/o/ozbbj9b7k.css';
import '../../css/k/k7dd6nbtd.css';
import '../../css/c/c8y78fsed.css';
import '../../css/g/geifm5bgv.css';
import '../../css/i/ihr4t-53j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="ozbbj9b7k"/><path class="k7dd6nbtd"/><path class="c8y78fsed"/><path class="geifm5bgv"/><rect class="ihr4t-53j"/></g>`,
		"fallback": "icon-park:dizzy-face",
	});
}

export default Component;
