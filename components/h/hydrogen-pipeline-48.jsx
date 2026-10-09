import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaq0blbdk.css';
import '../../css/b/bi902ok_o.css';
import '../../css/e/ecorgja0z.css';
import '../../css/y/y7x0imbpk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaq0blbdk"/><path class="bi902ok_o"/><path class="ecorgja0z"/><path class="y7x0imbpk"/>`,
		"fallback": "energy-icons:hydrogen-pipeline-48",
	});
}

export default Component;
