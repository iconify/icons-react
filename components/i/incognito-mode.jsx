import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/f/fv4iqs0io.css';
import '../../css/h/huug6ebpa.css';
import '../../css/j/jyflo82pl.css';
import '../../css/q/qo19wnb-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="fv4iqs0io"/><path class="huug6ebpa"/><path class="jyflo82pl"/><path class="qo19wnb-f"/></g>`,
		"fallback": "streamline-plump:incognito-mode",
	});
}

export default Component;
