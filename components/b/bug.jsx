import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/twy02ghvq.css';
import '../../css/m/mgs42q36i.css';
import '../../css/g/g4dwrabvb.css';
import '../../css/p/pwqzqsbla.css';
import '../../css/h/ha5c3ebcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="twy02ghvq"/><path class="mgs42q36i"/><path class="g4dwrabvb"/><path class="pwqzqsbla"/><path class="ha5c3ebcy"/></g>`,
		"fallback": "streamline-plump-color:bug",
	});
}

export default Component;
