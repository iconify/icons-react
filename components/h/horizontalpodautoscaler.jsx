import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/k/k0wkctbev.css';
import '../../css/w/wn8ccbcke.css';
import '../../css/o/o36s95bua.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="k0wkctbev"><path class="wn8ccbcke"/><path class="o36s95bua"/></g>`,
		"fallback": "k8s:horizontalpodautoscaler",
	});
}

export default Component;
