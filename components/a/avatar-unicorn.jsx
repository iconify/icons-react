import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs48--bun.css';
import '../../css/h/hfz1ktbyp.css';
import '../../css/o/o-mbnibnn.css';
import '../../css/b/b6azodbkb.css';
import '../../css/b/bv-g1sb7p.css';
import '../../css/j/j69gqbc8f.css';
import '../../css/q/q2oztrbgd.css';
import '../../css/f/fblfk9bwm.css';
import '../../css/a/an4ae2bkg.css';
import '../../css/a/a8b-h5b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs48--bun wm-a"/><path class="hfz1ktbyp wm-k"/><path class="o-mbnibnn wm-k"/><path class="b6azodbkb wm-k"/><path class="bv-g1sb7p wm-s"/><path class="j69gqbc8f"/><path class="q2oztrbgd wm-a"/><circle class="fblfk9bwm"/><path class="an4ae2bkg"/><circle class="a8b-h5b6y"/>`,
		"fallback": "withicons-bauhaus:avatar-unicorn",
	});
}

export default Component;
