import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/ug0kw7bmc.css';
import '../../css/w/wv316tb1s.css';
import '../../css/e/eq1q-8bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="ug0kw7bmc"/><path class="wv316tb1s"/><path class="eq1q-8bmw"/></g>`,
		"fallback": "lets-icons:folder-file-alt",
	});
}

export default Component;
