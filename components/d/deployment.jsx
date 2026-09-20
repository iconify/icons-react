import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/h/h22ephbyn.css';
import '../../css/g/go7r6obvp.css';
import '../../css/j/j9z2dac9l.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="h22ephbyn"><path class="go7r6obvp"/><path class="j9z2dac9l"/></g>`,
		"fallback": "k8s:deployment",
	});
}

export default Component;
