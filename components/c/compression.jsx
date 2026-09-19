import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/g/gwf4hub6l.css';
import '../../css/v/v1d7epbbz.css';
import '../../css/v/v0eyhohjf.css';
import '../../css/u/uk1hw4hsp.css';
import '../../css/o/o-l5ahv7j.css';
import '../../css/w/w_msf9buc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="gwf4hub6l"/><path class="v1d7epbbz"/><path class="v0eyhohjf"/><path class="uk1hw4hsp"/><path class="o-l5ahv7j"/><path class="w_msf9buc"/></g>`,
		"fallback": "icon-park:compression",
	});
}

export default Component;
