import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/n/nqk0mrsuo.css';
import '../../css/n/n16lh5xxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="nqk0mrsuo"/><path class="n16lh5xxw"/></g>`,
		"fallback": "icon-park-solid:helmet-one",
	});
}

export default Component;
