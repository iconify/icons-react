import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ed0419bqm.css';
import '../../css/z/zwm984q8b.css';
import '../../css/w/w9qlqs1ew.css';
import '../../css/v/vsp4k3ely.css';
import '../../css/o/o8n3eqx7g.css';
import '../../css/a/a0xk725ow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="ed0419bqm"/><path class="zwm984q8b"/><path class="w9qlqs1ew"/><path class="vsp4k3ely"/><path class="o8n3eqx7g"/><path class="a0xk725ow"/></g>`,
		"fallback": "icon-park:engineering-brand",
	});
}

export default Component;
