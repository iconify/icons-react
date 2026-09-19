import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0bbksaqk.css';
import '../../css/u/uyquv455s.css';
import '../../css/p/pumxzhblo.css';
import '../../css/o/o1y7wxfvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0bbksaqk"/><path class="uyquv455s"/><path class="pumxzhblo"/><path class="o1y7wxfvm"/></g>`,
		"fallback": "fluent-emoji-flat:coconut",
	});
}

export default Component;
