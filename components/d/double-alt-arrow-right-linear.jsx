import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l9qio6kvn.css';
import '../../css/g/gbmri-cql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l9qio6kvn"/><path class="gbmri-cql"/></g>`,
		"fallback": "solar:double-alt-arrow-right-linear",
	});
}

export default Component;
