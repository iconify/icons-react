import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8mndubwj.css';
import '../../css/n/nnrwljozc.css';
import '../../css/i/ihvzllbyi.css';
import '../../css/m/m_uwjcbrw.css';
import '../../css/p/pkrnwtb6i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8mndubwj"/><path class="nnrwljozc"/><path class="ihvzllbyi"/><path class="m_uwjcbrw"/><path class="pkrnwtb6i"/></g>`,
		"fallback": "fluent-emoji-flat:factory",
	});
}

export default Component;
