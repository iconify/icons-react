import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/q/q8fynub3l.css';
import '../../css/k/kk71b4b6e.css';
import '../../css/j/jh191sqqi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="q8fynub3l"/><path class="kk71b4b6e"/><path class="jh191sqqi"/></g>`,
		"fallback": "icon-park:grinning-face-with-squinting-eyes",
	});
}

export default Component;
