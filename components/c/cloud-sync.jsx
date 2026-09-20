import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jl8kb8ifb.css';
import '../../css/p/pf9j_q2uf.css';
import '../../css/k/knsj2rbxw.css';
import '../../css/y/y-w679b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jl8kb8ifb"/><path class="pf9j_q2uf"/><path class="knsj2rbxw"/><path class="y-w679b1v"/></g>`,
		"fallback": "lucide:cloud-sync",
	});
}

export default Component;
