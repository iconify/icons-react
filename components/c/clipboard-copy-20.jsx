import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb3dnqqxo.css';
import '../../css/v/vvipxtb-q.css';
import '../../css/v/v93buebvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb3dnqqxo"/><path class="vvipxtb-q"/><path class="v93buebvk"/>`,
		"fallback": "energy-icons:clipboard-copy-20",
	});
}

export default Component;
