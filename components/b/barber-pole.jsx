import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_69sacww.css';
import '../../css/j/joejem94l.css';
import '../../css/t/tfva2qacf.css';
import '../../css/y/ywvcqcg1f.css';
import '../../css/b/b8uh4ccim.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_69sacww"/><path class="joejem94l"/><path class="tfva2qacf"/><path class="ywvcqcg1f"/><path class="b8uh4ccim"/></g>`,
		"fallback": "fluent-emoji-flat:barber-pole",
	});
}

export default Component;
