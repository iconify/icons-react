import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuo1qt70o.css';
import '../../css/j/jw7k9ujya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xuo1qt70o"/><path class="jw7k9ujya"/></g>`,
		"fallback": "tabler:balloon",
	});
}

export default Component;
