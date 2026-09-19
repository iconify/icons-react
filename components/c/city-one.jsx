import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m9_pfwxdg.css';
import '../../css/y/yn9yiv9nt.css';
import '../../css/p/picfsrboi.css';
import '../../css/e/er8v8zf8v.css';
import '../../css/f/fbq6v3bqz.css';
import '../../css/q/q8v7fabxm.css';
import '../../css/o/oym3girdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="m9_pfwxdg"/><rect class="yn9yiv9nt"/><rect class="picfsrboi"/><path class="er8v8zf8v"/><path class="fbq6v3bqz"/><path class="q8v7fabxm"/><path class="oym3girdc"/></g>`,
		"fallback": "icon-park:city-one",
	});
}

export default Component;
