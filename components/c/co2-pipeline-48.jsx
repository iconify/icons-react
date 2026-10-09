import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaq0blbdk.css';
import '../../css/p/ppdr4b5kz.css';
import '../../css/y/y7x0imbpk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaq0blbdk"/><path class="ppdr4b5kz"/><path class="y7x0imbpk"/>`,
		"fallback": "energy-icons:co2-pipeline-48",
	});
}

export default Component;
