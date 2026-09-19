import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g1-qxqbur.css';
import '../../css/j/jgg56cbfn.css';
import '../../css/v/vxzaw_bgf.css';
import '../../css/d/dml3zeblg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="g1-qxqbur"/><path class="jgg56cbfn"/><path clip-rule="evenodd" class="vxzaw_bgf"/><path class="dml3zeblg"/></g>`,
		"fallback": "icon-park-outline:delete-one",
	});
}

export default Component;
