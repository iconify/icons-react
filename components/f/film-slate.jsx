import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wqbupoblz.css';
import '../../css/b/bazsypdie.css';
import '../../css/q/q_ropdxur.css';
import '../../css/y/yixj39qvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wqbupoblz"/><path class="bazsypdie"/><path class="q_ropdxur"/><path class="yixj39qvu"/></g>`,
		"fallback": "streamline-plump-color:film-slate",
	});
}

export default Component;
