import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrm3znzjd.css';
import '../../css/d/df_tivw5m.css';
import '../../css/k/k49vcuboj.css';
import '../../css/m/ml4iam-lz.css';
import '../../css/h/h0cgywbaa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vrm3znzjd"/><path class="df_tivw5m"/><path class="k49vcuboj"/><path class="ml4iam-lz"/><path class="h0cgywbaa"/></g>`,
		"fallback": "fluent-emoji-flat:falafel",
	});
}

export default Component;
