import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6jl_bkj.css';
import '../../css/j/jghrocalp.css';
import '../../css/p/pn48gtbgw.css';
import '../../css/w/wiuhzdagt.css';
import '../../css/u/uj0e2ibws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ly6jl_bkj"><path class="jghrocalp"/><circle class="pn48gtbgw"/><circle class="wiuhzdagt"/><circle class="uj0e2ibws"/></g>`,
		"fallback": "icon-park:crown-three",
	});
}

export default Component;
