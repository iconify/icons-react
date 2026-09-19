import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r08uf-dum.css';
import '../../css/c/cfxr_rd5n.css';
import '../../css/v/v3miwabnt.css';
import '../../css/p/p8gjx6bgp.css';
import '../../css/j/jnj60ebkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r08uf-dum"/><path class="cfxr_rd5n"/><circle class="v3miwabnt"/><path class="p8gjx6bgp"/><path class="jnj60ebkt"/></g>`,
		"fallback": "icon-park:blade",
	});
}

export default Component;
