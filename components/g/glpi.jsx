import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-nrwr6-l.css';
import '../../css/p/pbbp6tybj.css';
import '../../css/u/u4nf05b9r.css';
import '../../css/o/ov1_56bin.css';
import '../../css/a/act7vhwso.css';
import '../../css/y/ymvf5wbzi.css';

const viewBox = {"width":216,"height":92};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-nrwr6-l"/><path class="pbbp6tybj"/><path class="u4nf05b9r"/><path class="ov1_56bin"/><path class="act7vhwso"/><path class="ymvf5wbzi"/>`,
		"fallback": "thesvg-color:glpi",
	});
}

export default Component;
