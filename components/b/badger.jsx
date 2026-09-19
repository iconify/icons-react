import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7xe7ebpl.css';
import '../../css/j/jmtt3bcpb.css';
import '../../css/o/oupxt4bjd.css';
import '../../css/p/pbnkudctx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n7xe7ebpl"/><path class="jmtt3bcpb"/><path class="oupxt4bjd"/><path class="pbnkudctx"/></g>`,
		"fallback": "fluent-emoji-flat:badger",
	});
}

export default Component;
